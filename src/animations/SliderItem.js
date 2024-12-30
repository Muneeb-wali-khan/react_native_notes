import {View, Text, Image, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const SliderItem = ({image, index, currentIndex}) => {
  const animation = useSharedValue(0);

  useEffect(() => {
    animation.value = currentIndex;
  }, [currentIndex]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: animation.value == index ? withSpring(1) : withSpring(0.5),
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        {
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: Dimensions.get('window').width - 40,
          // backgroundColor: 'white',
        },
        animatedStyle,
      ]}>
      <Image source={image} style={{height: '60%', width: '60%'}} />
    </Animated.View>
  );
};

export default SliderItem;
