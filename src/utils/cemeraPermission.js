import { PermissionsAndroid, Platform } from 'react-native';
import { Camera } from 'react-native-vision-camera';

export const requestCameraPermission = async () => {
  try {
    if (Platform.OS === 'android') {
      const cameraPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );

      if (cameraPermission === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('✅ Camera permission granted');
        return true;
      } else {
        console.log('❌ Camera permission denied');
        return false;
      }
    } else {
      // Request camera permission on iOS
      const status = await Camera.requestCameraPermission();
      if (status === 'granted') {
        console.log('✅ Camera permission granted');
        return true;
      } else {
        console.log('❌ Camera permission denied');
        return false;
      }
    }
  } catch (error) {
    console.error('Error requesting camera permission:', error);
    return false;
  }
};
