import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const ReAnimated5 = () => {
  const animation = useSharedValue(0);
  const [value, setValue] = useState(0)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width:
        animation.value === 1
          ? withTiming(300, {duration: 500})
          : withTiming(0, {duration: 500}),
    };
  });

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={[
          {
            backgroundColor: 'rgba(0, 0, 0, 0.08)',
            flexDirection: 'row',
            alignItems: 'center',
            width: 300,
            height: 50,
            borderRadius: 50,
            paddingHorizontal: 20,
          },
          animatedStyle,
        ]}>
        <TextInput style={{width: '85%'}} placeholder="Search Here.." />
        <TouchableOpacity
          onPress={() => {
            if (animation.value == 1) {
              animation.value = 0;
              setValue(0)
            } else {
              animation.value = 1;
              setValue(1)
            }
          }}>
          {value == 1 ? (
            <Image
              source={require('../images/close-x-10323.png')}
              style={{width: 20, height: 20}}
            />
          ) : (
            <Image
              source={require('../images/search-7523.png')}
              style={{width: 20, height: 20}}
            />
          )}
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default ReAnimated5;
