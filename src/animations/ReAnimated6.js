import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const ReAnimated6 = () => {
  const animations = useSharedValue(0);

  const GestureHandler = Gesture.Pan()
    .onChange(event => {
      animations.value = event.translationX;
    })
    .onEnd(() => {
      animations.value = withTiming(0, {duration: 500});
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animations.value}],
    };
  });

  const animationStyleLeft = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: animations.value > 70 ? withSpring(1.5) : withSpring(0)},
      ],
    };
  });

  const animationStyleRight = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: animations.value < -70 ? withSpring(1.5) : withSpring(0)},
      ],
    };
  });

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <GestureDetector gesture={GestureHandler}>
        <Animated.View
          style={{
            width: '100%',
            elevation: 5,
            backgroundColor: 'green',
            height: 100,
          }}>
          <Animated.View
            style={[
              {
                width: '100%',
                elevation: 5,
                backgroundColor: 'white',
                height: '100%',
                borderRadius: 10,
                position: 'absolute',
                zIndex: 10,
              },
              animatedStyle,
            ]}></Animated.View>
          <View style={{justifyContent: 'center', height: '100%'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Animated.View
                style={[
                  {width: 30, height: 30, marginLeft: 30},
                  animationStyleLeft,
                ]}>
                <Image
                  source={require('../images/heart-3510.png')}
                  style={[{height: '100%', width: '100%'}]}
                />
              </Animated.View>
              <Animated.View
                style={[
                  {width: 30, height: 30, marginRight: 30},
                  animationStyleRight,
                ]}>
                <Image
                  source={require('../images/heart-3510.png')}
                  style={[{height: '100%', width: '100%'}]}
                />
              </Animated.View>
            </View>
          </View>
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default ReAnimated6;
