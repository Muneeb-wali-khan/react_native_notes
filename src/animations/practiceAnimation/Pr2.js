import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const Pr2 = () => {
  const animation = useSharedValue(0);
  const [clicked, setClicked] = useState(true);

  const animationStyle = useAnimatedStyle(() => {
    const background = interpolateColor(
      animation.value,
      [0, 1],
      ['green', 'red'],
    );
    return {
      backgroundColor: background,
    };
  });

  return (
    <View>
      <Animated.View
        style={[
          {
            height: 100,
            width: 300,
            marginTop: 50,
            alignSelf: 'center',
          },
          animationStyle,
        ]}></Animated.View>

      <View
        style={{
          marginTop: 200,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            if (clicked) {
              animation.value = withTiming(1,{duration: 500});
            } else {
              animation.value = withTiming(0,{duration: 500});
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

export default Pr2;
