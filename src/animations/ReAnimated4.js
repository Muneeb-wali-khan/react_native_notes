import {View, Text, ImageBackground, Dimensions, Image} from 'react-native';
import React, {useCallback} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  TapGestureHandler,
} from 'react-native-gesture-handler';

const ImageComponent = Animated.createAnimatedComponent(Image);

const ReAnimated4 = () => {
  const scale = useSharedValue(0);

  const doubleTapAnimation = useCallback(() => {
    scale.value = withSpring(1, undefined, isFinished => {
      // on double tap scale value = 1 and when finishing callback func below
      if (isFinished) {
        scale.value = withDelay(100, withSpring(0)); // stay for 100 miliseconds when double tap and then 0 the spring effect
      }
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: Math.max(scale.value, 0)}], // initially scale value = 0
    };
  });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TapGestureHandler
          numberOfTaps={2}
          maxDelayMs={250}
          onActivated={doubleTapAnimation}>

          <Animated.View>
            <ImageBackground
              source={require('../images/270172021_433799671720494_4691930721938189549_n.jpg')}
              style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').width,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageComponent
                style={[
                  {width: 100, height: 100, tintColor: 'red'},
                  animatedStyle,
                ]}
                source={require('../images/heart-3510.png')}
              />
            </ImageBackground>
          </Animated.View>
          
        </TapGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

export default ReAnimated4;
