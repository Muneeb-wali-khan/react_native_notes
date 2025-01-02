import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
// button and loader

const ReAnimated9 = () => {
  const animation = useSharedValue(0);
  const [clicked, setIsClicked] = useState(false);

  const animatedStyles = useAnimatedStyle(() => {
    const width = interpolate(animation.value, [0, 1], [230, 55]);
    const height = interpolate(animation.value, [0, 1], [55, 55]);
    const borderRadius = interpolate(animation.value, [0, 1], [50, 100]);
    return {
      width,
      height,
      borderRadius,
    };
  });

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Animated.View
        style={[
          {
            borderRadius: 50,
            borderWidth: 1,
            overflow: 'hidden',
          },
          animatedStyles,
        ]}>
        <TouchableOpacity
          onPress={() => {
            animation.value = withTiming(clicked ? 0 : 1, {duration: 500});
            setIsClicked(!clicked);
          }}
          style={[
            {
              justifyContent: 'center',
              backgroundColor: 'purple',
              width: '100%',
              height: '100%',
            },
          ]}>
          {clicked ? (
            <Image
              source={require('../images/Rolling@1x-1.0s-200px-200px.gif')}
              style={{width: 30, height: 30, alignSelf: 'center'}}
            />
          ) : (
            <Text
              style={[
                {
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '700',
                  color: 'white',
                },
              ]}>
              Login
            </Text>
          )}
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default ReAnimated9;
