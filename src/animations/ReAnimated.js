import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withClamp,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

const ReAnimated = () => {
  const animation = useSharedValue(0);
  const [click, setClick] = useState(true);

  const animationStyle = useAnimatedStyle(() => {
    return {transform: [{translateX: animation.value}]};
  });
console.log(click);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Animated.View
        style={[
          {backgroundColor: 'yellow', height: 100, width: 100},
          animationStyle,
        ]}></Animated.View>
      <TouchableOpacity
        onPress={() => {
          if (click) {
            // animation.value = withSpring(100); // springy effect
            animation.value = withTiming(100,{duration: 500}); // based on duration effect
          } else {
            // animation.value = withSpring(0); // springy effect
            animation.value = withTiming(0,{duration: 500}); 
          }
          setClick(!click)
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

export default ReAnimated;
