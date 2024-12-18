import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withSpring,
  interpolateColor,
} from 'react-native-reanimated';

const ReAnimated2 = () => {
  const animation = useSharedValue(1);
  const [clicked, setClicked] = useState(true);

  const animatedStyle = useAnimatedStyle(() => {
    const width = interpolate(animation.value, [1, 0], [100, 200]);
    const backgroundColor = interpolateColor(animation.value, [1, 0], ['orange', 'red']);
    const radius = interpolate(animation.value, [1, 0], [0, 100]);
    return {
      width: width,
      height: width,
      backgroundColor: backgroundColor,
      borderRadius: radius
    };
  });

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Animated.View
        style={[
          {backgroundColor: 'green', height: 100, width: 100},
          animatedStyle,
        ]}></Animated.View>
      <TouchableOpacity
        onPress={() => {
          if (clicked) {
            animation.value = withSpring(0);
          } else {
            animation.value = withSpring(1);
          }
          setClicked(!clicked);
        }}
        style={{
          paddingHorizontal: 20,
          paddingVertical: 5,
          marginTop: 40,
          borderColor: 'gray',
          borderWidth: 0.5,
        }}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReAnimated2;
