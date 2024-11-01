//  drag and drop functionality animation

import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const Animation1 = () => {
  const X = useSharedValue(0);
  const Y = useSharedValue(0);

  const handleGestureEvent = useAnimatedGestureHandler({
    onStart: (e, c) => {
      c.startX = X.value;
      c.startY = Y.value;
    },
    onActive: (e, c) => {
      X.value = c.startX + e.translationX;
      Y.value = c.startY + e.translationY;
    },
    onEnd: (e, c) => {
      Y.value = withTiming(0, {duration: 1000});
      X.value = withTiming(0, {duration: 1000});
      console.log("hy");
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: X.value}, {translateY: Y.value}],
    };
  });
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <PanGestureHandler onGestureEvent={handleGestureEvent}>
          <Animated.View
            style={[
              {width: 100, height: 100, backgroundColor: 'orange'},
              animatedStyle,
            ]}>
            <Image
              style={{width: 100, height: 100}}
              source={require('../../src/images/270172021_433799671720494_4691930721938189549_n.jpg')}
            />
          </Animated.View>
        </PanGestureHandler>
        <View
          style={{
            flex:1
          }}>
          <View
            style={[
              {
                width: 100,
                height: 100,
                backgroundColor: 'orange',
                alignSelf: 'flex-end',
              },
            ]}></View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default Animation1;
