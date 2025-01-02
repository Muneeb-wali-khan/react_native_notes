import {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const ReAnimated8 = () => {
  const animation = useSharedValue(0);
  const [clicked, setIsClicked] = useState(true);

  const animatedStyleBg = useAnimatedStyle(() => {
    return {
      backgroundColor: animation.value > 0 ? '#292929' : 'white',
    };
  });
  const animatedStyleImage = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animation.value}],
    };
  });

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          if (clicked) {
            animation.value = withTiming(92, {duration: 500});
          } else {
            animation.value = withTiming(0, {duration: 500});
          }
          setIsClicked(!clicked);
        }}
        style={{
          borderRadius: 50,
          borderWidth: 2,
          height: 55,
          width: 150,
          overflow: 'hidden',
        }}>
        <Animated.View
          style={[
            {
              justifyContent: 'center',
              alignItems: 'flex-start',
              height: '100%',
            },
            animatedStyleBg,
          ]}>
          <Animated.View style={animatedStyleImage}>
            {clicked ? (
              <Image
                source={require('../images/light-mode-sun-yellow-circle-20616.png')}
                style={{
                  height: 35,
                  width: 35,
                  marginLeft: 10,
                }}
              />
            ) : (
              <Image
                source={require('../images/moon-6695.png')}
                style={{
                  height: 35,
                  width: 35,
                  marginLeft: 10,
                }}
              />
            )}
          </Animated.View>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default ReAnimated8;
