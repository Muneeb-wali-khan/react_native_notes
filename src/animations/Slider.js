import {View, Text, Dimensions, Image} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const Slider = ({image, index, currentIndex}) => {

  const animation = useSharedValue(0);
  useEffect(() => {
    animation.value = currentIndex;
  }, [currentIndex]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: animation.value == index ? withSpring(1) : withSpring(.8)},
      ],
    };
  });
  return (
    <Animated.View
      style={[
        {
          width: Dimensions.get('window').width - 100,
          height: Dimensions.get('window').height,
          justifyContent: 'center',
          alignItems: 'center',
        },
        animatedStyle,
      ]}>
      <Image
        source={image}
        style={{height: "40%", width: "100%", borderRadius: 10}}
      />
    </Animated.View>
  );
};

export default Slider;
