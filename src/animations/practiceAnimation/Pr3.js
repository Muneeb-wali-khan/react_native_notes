import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const Pr3 = () => {
  const animation = useSharedValue(0);
  const [clicked, setClicked] = useState(true);

  const animationStyle = useAnimatedStyle(() => {
    const colorText = interpolateColor(
      animation.value,
      [0, 1],
      ['red', 'red'],
    );
    const TextSize = interpolate(animation.value, [0, 1], [16, 25]);
    const opacityText = interpolate(animation.value, [0, 1], [0.6, 1]);
    return {
      fontSize: TextSize,
      color: colorText,
      opacity: opacityText,
    };
  });

  return (
    <View>
      <View
        style={[
          {
            height: 100,
            justifyContent: 'center',
            width: 300,
            marginTop: 50,
            alignSelf: 'center',
            backgroundColor: 'white',
            borderRadius: 10,
            borderWidth: 0.5,
            padding: 10,
          },
        ]}>
        <Animated.Text
          style={[{textAlign: 'center', fontWeight: '900'}, animationStyle]}>
          Muneeb wali khan
        </Animated.Text>
      </View>

      <View
        style={{
          marginTop: 200,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            if (clicked) {
              animation.value = withTiming(1, {duration: 700});
            } else {
              animation.value = withTiming(0, {duration: 700});
            }
            setClicked(!clicked);
          }}
          style={{
            borderWidth: 0.5,
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 10,
            backgroundColor: 'green',
          }}>
          <Text style={{color: 'white'}}>Press Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pr3;
