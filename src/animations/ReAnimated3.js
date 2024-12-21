import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {
  GestureHandlerRootView,
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

const {width, height} = Dimensions.get('screen');

const ReAnimated3 = () => {
  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);
  const prevTranslationX = useSharedValue(0);
  const prevTranslationY = useSharedValue(0);

  const animationStyle = useAnimatedStyle(() => ({
    transform: [
      {translateX: translationX.value},
      {translateY: translationY.value},
    ],
  }));

  const handlPanGesture = Gesture.Pan()
    .minDistance(1)
    .onStart(() => {
      prevTranslationX.value = translationX.value;
      prevTranslationY.value = translationY.value;
    })
    .onUpdate((event) => {
      const maxTranslateX = width;
      const maxTranslateY = height;

      translationX.value = clamp(
        prevTranslationX.value + event.translationX,
        -maxTranslateX,
        maxTranslateX,
      );
      translationY.value = clamp(
        prevTranslationY.value + event.translationY,
        -maxTranslateY,
        maxTranslateY,
      );
    })
    .runOnJS(true);
  return (
    <GestureHandlerRootView>
      <View style={{flex: 1}}>
        <GestureDetector gesture={handlPanGesture}>
          <Animated.View
            style={[
              animationStyle,
              {
                backgroundColor: 'green',
                height: 100,
                width: 100,
                margin: 10,
              },
            ]}></Animated.View>
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
};

export default ReAnimated3;
