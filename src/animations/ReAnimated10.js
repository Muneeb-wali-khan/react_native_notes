import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const ReAnimated10 = () => {
  const ImgWidth = useSharedValue(70);
  const ImgHeight = useSharedValue(70);
  const ImgYAxis = useSharedValue(0);
  const ImgScale = useSharedValue(0);
  const leftMoveContainer = useSharedValue(0);

  const AnimatedStyle = useAnimatedStyle(() => {
    return {
      width: ImgWidth.value,
      height: ImgHeight.value,
      transform: [{translateY: ImgYAxis.value}],
    };
  });

  const AnimatedStyleIMG = useAnimatedStyle(() => {
    return {
      transform: [{scale: ImgScale.value}],
    };
  });

  const leftMoveContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: leftMoveContainer.value}],
    };
  });

  return (
    <View style={{flex: 1, backgroundColor: '#1c1c1c'}}>
      <AnimatedTouchableOpacity
        style={[
          {marginTop: 20, marginLeft: 20, alignSelf: 'flex-start'},
          AnimatedStyleIMG,
        ]}
        onPress={() => {
          leftMoveContainer.value = withTiming(0, {duration: 300});
          ImgScale.value = withTiming(0, {duration: 500});
          ImgWidth.value = withTiming(70, {duration: 500});
          ImgHeight.value = withTiming(70, {duration: 500});
          ImgYAxis.value = withTiming(0, {duration: 500});
        }}>
        <Image
          source={require('../images/close-x-10323.png')}
          style={[
            {
              width: 25,
              height: 25,
              resizeMode: 'contain',
              tintColor: 'white',
            },
          ]}
        />
      </AnimatedTouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          if (ImgWidth.value === 70) {
            leftMoveContainer.value = withTiming(
              -Dimensions.get('window').width,
              {duration: 200},
            );
            ImgScale.value = withTiming(1, {duration: 500});
            ImgWidth.value = withTiming(300, {duration: 500});
            ImgHeight.value = withTiming(300, {duration: 500});
            ImgYAxis.value = withTiming(150, {duration: 500});
          }
        }}>
        <AnimatedImage
          source={require('../images/moon-6695.png')}
          style={[
            {
              width: 70,
              height: 70,
              marginLeft: 30,
              marginTop: 30,
              resizeMode: 'contain',
            },
            AnimatedStyle,
          ]}
        />
      </TouchableOpacity>

      <Animated.View
        style={[
          {
            flexDirection: 'row',
            height: 60,
            borderWidth: 1,
            marginTop: 50,
            backgroundColor: '#fefefe',
          },
          leftMoveContainerStyle,
        ]}></Animated.View>

      <Animated.View
        style={[
          {
            height: 70,
            backgroundColor: '#fefefe',
            flexDirection: 'row',
            width: '100%',
            position: 'absolute',
            bottom: 0,
            justifyContent: 'space-between',
            paddingHorizontal: 30,
            alignItems: 'center',
          },
          leftMoveContainerStyle,
        ]}>
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            backgroundColor: 'black',
          }}></TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            backgroundColor: 'black',
          }}></TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            backgroundColor: 'black',
          }}></TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            backgroundColor: 'black',
          }}></TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default ReAnimated10;
