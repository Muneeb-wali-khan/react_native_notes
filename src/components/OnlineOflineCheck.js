// install this library.     @react-native-community/netinfo
import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

const OnlineOflineCheck = () => {
  const [isConnected, setisConnected] = useState(true);
  const bottomVal = useSharedValue(-50);

  useEffect(() => {
    const unSubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      setisConnected(state.isConnected);
      bottomVal.value = state.isConnected ? -50 : 0;
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const animationStyle = useAnimatedStyle(() => {
    return {
      bottom: withTiming(bottomVal.value, {duration: 1000}),
    };
  });

  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={[
          {
            position: 'absolute',
            width: '100%',
            height: 40,
            backgroundColor: isConnected ? 'seagreen' : 'red',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
          animationStyle,
        ]}>
        <Text style={{color: 'white', fontWeight: 700}}>
          {isConnected ? 'Connected to Internet ' : 'No Internet connection !'}
        </Text>
      </Animated.View>
    </View>
  );
};

export default OnlineOflineCheck;
