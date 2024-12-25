import {View, Text} from 'react-native';
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
    .onChange((event) => {
        animations.value =  event.translationX;
    })
    .onEnd(() => {
     animations.value = withTiming(0,{duration:500});
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animations.value}],
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
              },
              animatedStyle,
            ]}></Animated.View>
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default ReAnimated6;
