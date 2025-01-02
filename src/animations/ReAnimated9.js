import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
// loader

const ReAnimated9 = () => {
  const animation = useSharedValue(0);
  const [clicked, setIsClicked] = useState(true);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: animation.value > 0 ? 0 : 230,
      height: animation.value > 0 ? 0 : 55,
    };
  });

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Animated.View>
        <TouchableOpacity
          onPress={() => {
            if (clicked) {
              animation.value = withTiming(1, {duration: 500});
            } else {
              animation.value = withTiming(0, {duration: 500});
            }
            setIsClicked(!clicked);
          }}
          style={[
            {
                width:230,
                height:55,
              borderWidth: 1,
              borderRadius: 50,
              justifyContent: 'center',
              backgroundColor: 'purple',
            },
            animatedStyles,
          ]}>
          {clicked ? (
            <Image
              source={require('../images/Rolling@1x-1.0s-200px-200px.gif')}
              style={{width: 30, height: 30, alignSelf: 'center'}}
            />
          ) : (
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                fontWeight: '700',
                color: 'white',
              }}>
              Login
            </Text>
          )}
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default ReAnimated9;
