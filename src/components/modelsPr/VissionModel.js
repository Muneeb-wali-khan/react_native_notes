import {
  View,
  Text,
  Button,
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import TextRecognition from '@react-native-ml-kit/text-recognition';
import axios from 'axios';
import ImageCropPicker from 'react-native-image-crop-picker';
import {useCameraDevice, useCodeScanner} from 'react-native-vision-camera';
import {Camera} from 'react-native-vision-camera';
import Sound from 'react-native-sound';

const VissionModel = () => {
  const [imgUri, setImgUri] = useState(null);
  const [loading, setLoading] = useState(false);

  const [hasPermission, setHasPermission] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const device = useCameraDevice('back');
  const scanTimeout = useRef(null);
  const [chooseOcr, setChooseOcr] = useState(false);
  const [soundsLoaded, setSoundsLoaded] = useState(false);

  const onScaned = new Sound('success_sound.mp3', Sound.MAIN_BUNDLE);

  useEffect(() => {
    return () => {
      onScaned.stop();
      onScaned.release();
    };
  }, []);

  useEffect(() => {
    const loadSounds = () => {
      onScaned.setVolume(1);
      setSoundsLoaded(true);
    };
    loadSounds();
  }, []);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermission();
      setHasPermission(cameraPermission === 'granted');
      console.log('Camera permission status:', cameraPermission);
    })();

    // Cleanup function to clear any timeouts
    return () => {
      if (scanTimeout.current) {
        clearTimeout(scanTimeout.current);
      }
    };
  }, [hasPermission]);

  const onCodeScanned = useCallback(
    codes => {
      console.log('codes', codes);

      try {
        console.log(`Scanned ${codes.length} codes:`, codes);
        if (codes.length === 0) {
          return Alert.alert('Scan Error', 'Could not read QR code value');
        }

        const value = codes[0]?.value;

        if (value !== null) {
          parseIDData(value);
        }
        if (value == null) {
          Alert.alert('Scan Error', 'Could not read QR code value');
          return;
        }

        setIsScanning(false);
        Alert.alert('Scan Success', `Scanned value: ${value}`);
      } catch (error) {
        Alert.alert('Scan Error', `An error occurred: ${error}`);

        // Re-enable scanning after error
        scanTimeout.current = setTimeout(() => {
          setIsScanning(true);
        }, 2000);
      }
    },
    [isScanning],
  );

  useEffect(() => {
    if (isScanning) {
      scanTimeout.current = setTimeout(() => {
        setIsScanning(false);
      }, 2000);
    }
  }, [isScanning]);

  const codeScanner = useCodeScanner({
    codeTypes: [
      'qr',
      'ean-13',
      'code-128',
      'code-39',
      'code-93',
      'codabar',
      'ean-8',
      'itf',
      'upc-e',
    ],
    onCodeScanned: onCodeScanned,
  });

  if (!hasPermission) {
    return (
      <Text style={styles.permissionText}>Please grant camera permission</Text>
    );
  }

  if (!device) {
    return (
      <Text style={styles.permissionText}>No camera device available</Text>
    );
  }

  // OCR CODE BELOW
  const takePicture = async () => {
    const result = await ImageCropPicker.openCamera({
      width: 300,
      height: 200,
      cropping: true,
    });
    if (result) {
      console.log(result);
      const imageUri = result.path;
      setImgUri(imageUri);
    }
  };

  const processImage = async () => {
    try {
      const result = await TextRecognition.recognize(imgUri);
      // console.log('Recognized text:', result.text);

      parseIDData(result.text);
    } catch (error) {
      console.error('Text recognition failed:', error);
    }
  };

  const parseIDData = data => {
    if (!data) {
      Alert.alert('Scan Error', 'No data found');
      return null;
    }

    const scannedData = Array.isArray(data) ? data[0] : data;
    const scannedValue = scannedData || '';

    const result = {
      name: '',
      email: '',
      address: '',
    };

    if (
      scannedValue.includes('Name:') &&
      scannedValue.includes('Email:') &&
      scannedValue.includes('Address:')
    ) {
      // Extract name (between "Name:" and "Email:")
      const nameStart = scannedValue.indexOf('Name:') + 'Name:'.length;
      const nameEnd = scannedValue.indexOf('Email:');
      result.name = scannedValue.substring(nameStart, nameEnd).trim();

      // Extract email (between "Email:" and "Address:")
      const emailStart = scannedValue.indexOf('Email:') + 'Email:'.length;
      const emailEnd = scannedValue.indexOf('Address:');
      result.email = scannedValue.substring(emailStart, emailEnd).trim();

      // Extract address (after "Address:")
      const addressStart = scannedValue.indexOf('Address:') + 'Address:'.length;
      result.address = scannedValue.substring(addressStart).trim();
    }

    console.log('Parsed Data:', result);

    saveToGoogleSheets(result);
    setImgUri(null);
  };

  const saveToGoogleSheets = async data => {
    const WEB_APP_URL =
      'https://school-managment-system-pi.vercel.app/api/v1/googleSheet/upload-google-sheet';
    try {
      setLoading(true);
      const res = await axios.post(
        WEB_APP_URL,
        {...data},
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (res.data) {
        console.log('res', res.data);
        onScaned.play(success => {
          if (success) {
            console.log('Sound played successfully');
          } else {
            console.log('Sound playback failed');
          }
        });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Failed to save data:', error);
    }
  };

  return (
    <>
      {chooseOcr ? (
        <View style={styles.ocrContainer}>
          <View style={styles.imageContainer}>
            {imgUri && (
              <Image source={{uri: imgUri}} style={styles.previewImage} />
            )}

            <TouchableOpacity
              style={[styles.button, styles.primaryButton]}
              onPress={imgUri !== null ? processImage : takePicture}>
              <Text style={styles.buttonText}>
                {imgUri !== null ? 'Process Image' : 'Take Picture'}
              </Text>
            </TouchableOpacity>

            {loading && (
              <View style={styles.loadingOverlay}>
                <ActivityIndicator size="large" color="#ffffff" />
                <Text style={styles.loadingText}>Processing...</Text>
              </View>
            )}
          </View>

          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={() => setChooseOcr(false)}>
            <Text style={styles.buttonText}>Switch to QR Scanner</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <Camera
            style={styles.camera}
            device={device}
            isActive={true}
            codeScanner={isScanning ? codeScanner : undefined}
            enableZoomGesture={true}
          />

          <View style={styles.scanOverlay}>
            <View style={styles.scanFrame}>
              <View style={styles.cornerTL} />
              <View style={styles.cornerTR} />
              <View style={styles.cornerBL} />
              <View style={styles.cornerBR} />
            </View>
            <TouchableOpacity
              onPress={() => {
                setIsScanning(true);
              }}
              style={styles.instructionText}>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 16,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                }}>
                {
                  isScanning ? (
                    <ActivityIndicator size="large" color="#ffffff" />
                  ) : (
                    'Scan Qr Code'
                  )
                  // 'Scan Qr Code'
                }
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.button, styles.floatingButton]}
            onPress={() => setChooseOcr(true)}>
            <Text style={styles.buttonText}>Switch to Image Scanner</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  // Main containers
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#f5f5f5',
  },
  ocrContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 30,
  },

  // Camera
  camera: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  // Image preview
  previewImage: {
    width: 300,
    height: 225,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },

  // Scanning overlay
  scanOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanFrame: {
    width: 250,
    height: 250,
    backgroundColor: 'transparent',
    position: 'relative',
  },
  instructionText: {
    marginTop: 80,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 20,
    overflow: 'hidden',
    textAlign: 'center',
  },

  // Corner indicators for scan frame
  cornerTL: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderColor: 'rgba(16,211,232,.9)',
  },
  cornerTR: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 30,
    height: 30,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderColor: 'rgba(16,211,232,.9)',
  },
  cornerBL: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 30,
    height: 30,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderColor: 'rgba(16,211,232,.9)',
  },
  cornerBR: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: 'rgba(16,211,232,.9)',
  },

  // Buttons
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 180,
  },
  primaryButton: {
    backgroundColor: '#2196F3',
  },
  secondaryButton: {
    backgroundColor: '#673AB7',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: 'rgba(33, 150, 243, 0.9)',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },

  // Loading state
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  loadingText: {
    color: '#ffffff',
    marginTop: 10,
    fontSize: 16,
  },
});

export default VissionModel;
