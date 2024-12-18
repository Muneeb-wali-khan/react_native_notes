import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const Pr1 = () => {
  const value = useSharedValue(100);
  const [pressed, setPressed] = useState(true);

  const animationStyle = useAnimatedStyle(() => {
    return {
      height: value.value,
    };
  });

  return (
    <View>
      <Animated.View
        style={[
          {
            height: 100,
            width: 300,
            backgroundColor: 'red',
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
            if (pressed) {
              value.value = withTiming(350, {duration: 1000});
            } else {
              value.value = withSpring(100, {damping: 10, stiffness: 100});
            }
            setPressed(!pressed);
          }}
          style={{
            borderWidth: 0.5,
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 10,
            backgroundColor: 'red',
          }}>
          <Text style={{color: 'white'}}>Press Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pr1;
