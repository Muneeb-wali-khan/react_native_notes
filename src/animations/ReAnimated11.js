import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const ReAnimated11 = () => {
  const topVl = useSharedValue(0);
  const leftVl = useSharedValue(0);
  const opicityVl = useSharedValue(1);
  const scaleVl = useSharedValue(1);
  const [count, setCount] = useState(0);

  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      zIndex: 0,
      top: topVl.value,
      left: leftVl.value,
      opacity: opicityVl.value,
    };
  });

  const animatedIconStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{scale: scaleVl.value}],
    };
  });

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={{width: '100%', height: 300}}
          source={require('../images/270172021_433799671720494_4691930721938189549_n.jpg')}>
          <View style={{marginLeft: 40, marginTop: 20}}>
            <View
              style={{
                width: 70,
                height: 70,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: 50,
              }}>
              <Image
                style={{width: '50%', height: '50%'}}
                source={require('../images/red-shopping-cart-10906.png')}
              />
            </View>
            <Animated.View
              style={[
                {
                  width: 36,
                  position: 'absolute',
                  height: 36,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'red',
                  borderRadius: 50,
                  left: -10,
                },
                animatedIconStyle2,
              ]}>
              <Text style={{fontSize: 13, fontWeight: '800', color: 'white'}}>
                {count}
              </Text>
            </Animated.View>
          </View>
        </ImageBackground>
        <View style={{paddingHorizontal: 15, marginTop: 10}}>
          <Text style={{fontWeight: '900', fontSize: 17}}>
            What does Lorem Ipsum text say?
          </Text>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 14,
              marginTop: 10,
              color: 'gray',
            }}>
            Printers in the 1500s scrambled the words from Cicero's "De Finibus
            Bonorum et Dolorem'' after mixing the words in each sentence. They
            abbreviated the word Dolorem, which means pain, to the phrase lorem,
            which does not have an actual meaning. Ipsum means itself. Lorem
            Ipsum, then, refers to your pain. The word "sham pain" in the song
            by Five Finger Death Punch in modern music lyrics corresponds to
            lorem ipsum. Printers in the 1500s scrambled the words from Cicero's
            "De Finibus Bonorum et Dolorem'' after mixing the words in each
            sentence. They abbreviated the word Dolorem, which means pain, to
            the phrase lorem, which does not have an actual meaning. Ipsum means
            itself. Lorem Ipsum, then, refers to your pain. The word "sham pain"
            in the song by Five Finger Death Punch in modern music lyrics
            corresponds to lorem ipsum. sentence. They abbreviated the word
            Dolorem, which means pain, to the phrase lorem, which does not have
            an actual meaning. Ipsum means itself. Lorem Ipsum, then, refers to
            your pain. The word "sham pain" in the song by Five Finger Death
            Punch in modern music lyrics corresponds to lorem ipsum.
          </Text>
        </View>
      </ScrollView>
      <View
        style={{justifyContent: 'center', alignItems: 'center', padding: 15}}>
        <TouchableOpacity
          onPress={() => {
            opicityVl.value = withTiming(1);
            topVl.value = withTiming(-620, {duration: 1500});
            leftVl.value = withTiming(-130, {duration: 1500});

            setTimeout(() => {
              scaleVl.value = withTiming(1.4, {duration: 500});
              setCount(count + 1);
              setTimeout(() => {
                scaleVl.value = withTiming(1);
              }, 300);
              opicityVl.value = 0;
              topVl.value = withTiming(0);
              leftVl.value = withTiming(0);
            }, 1500);
          }}
          activeOpacity={0.7}
          style={{
            paddingVertical: 18,
            borderRadius: 10,
            paddingHorizontal: 20,
            width: '100%',
            zIndex: 1,
            backgroundColor: 'brown',
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}>Add to Cart</Text>
        </TouchableOpacity>

        <View
          style={{
            position: 'absolute',
          }}>
          <Animated.View
            style={[
              {
                borderRadius: 50,
                backgroundColor: 'red',
                paddingVertical: 9,
                paddingHorizontal: 10,
              },
              animatedIconStyle,
            ]}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '800',
                color: 'white',
              }}>
              1
            </Text>
          </Animated.View>
        </View>
      </View>
    </>
  );
};

export default ReAnimated11;
