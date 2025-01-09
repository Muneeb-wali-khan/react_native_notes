import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ReAnimated11 = () => {
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
            <View
              style={{
                width: 36,
                position: 'absolute',
                height: 36,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'red',
                borderRadius: 50,
                left: -10,
              }}>
              <Text style={{fontSize: 13, fontWeight: '800', color: 'white'}}>
                12
              </Text>
            </View>
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
          style={{
            paddingVertical: 18,
            borderRadius: 10,
            paddingHorizontal: 20,
            width: '100%',
            zIndex:100,
            backgroundColor: 'brown',
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}>Add to Cart</Text>
        </TouchableOpacity>
        <View
          style={{
            width: 36,
            position: 'absolute',
            height: 36,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            borderRadius: 50,
            zIndex:0
          }}>
          <Text style={{fontSize: 13, fontWeight: '800', color: 'white'}}>
            12
          </Text>
        </View>
      </View>
    </>
  );
};

export default ReAnimated11;
