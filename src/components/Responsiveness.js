import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  verticalScale,
} from 'react-native-size-matters';

const Responsiveness = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text
        style={{
          fontSize: moderateScale(25),
          textAlign: 'center',
          fontWeight: '600',
          marginTop: moderateVerticalScale(100),
        }}>
        Sign Up
      </Text>
      <TextInput
        placeholder="Enter UserName"
        style={{
          width: '90%',
          //   height: Platform.OS=="ios"? moderateScale(40) : moderateScale(50),  // for other divices like andriod and ios etc.
          height: moderateScale(50),
          borderRadius: moderateScale(10),
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: moderateVerticalScale(50),
          paddingLeft: moderateScale(20),
        }}
      />
      <TextInput
        placeholder="Enter Email"
        style={{
          width: '90%',
          height: moderateScale(50),
          borderRadius: moderateScale(10),
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: moderateVerticalScale(20),
          paddingLeft: moderateScale(20),
        }}
      />
      <TextInput
        placeholder="Enter Mobile"
        style={{
          width: '90%',
          height: moderateScale(50),
          borderRadius: moderateScale(10),
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: moderateVerticalScale(20),
          paddingLeft: moderateScale(20),
        }}
      />
      <TextInput
        placeholder="Enter Password"
        style={{
          width: '90%',
          height: moderateScale(50),
          borderRadius: moderateScale(10),
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: moderateVerticalScale(20),
          paddingLeft: moderateScale(20),
        }}
      />
      <TouchableOpacity
        style={{
          //   padding: moderateScale(15),
          height: moderateVerticalScale(50),
          borderWidth: 1,
          marginTop: 50,
          backgroundColor: 'black',
          width: '90%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: moderateScale(10),
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: moderateScale(19),
            color: 'white',
          }}>
          Register
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Responsiveness;

// always use percentage in width rather than others properties
//   height: Platform.OS=="ios"? moderateScale(40) : moderateScale(50),  // for other divices like andriod and ios etc.
// SafeAreaView is used to avoid the status bar top it gives margin from top in both ios and andriod
// main thing and responsiveness of mobile apps is height issue some devices is long some short

// ===>  react-native-size-matters properties usecase

// 1) width ===> scale
// 2) height ===> verticalScale
// 3) marginLeft, marginRight, paddingRight,paddingLeft ===> ModerateScale
// 4) marginTop, marginBottom, paddingTop,paddingBottom ===> ModerateVerticalScale
