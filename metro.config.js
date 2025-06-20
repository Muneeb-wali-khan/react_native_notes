const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    assetExts: [
      // Default extensions
      'png',
      'jpg',
      'jpeg',
      'gif',
      'webp',
      'svg',
      // Add TFLite and other custom extensions
      'tflite',
      'bin',
      'txt',
    ],
  },
  // Add maxWorkers here
  maxWorkers: 1, 
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);