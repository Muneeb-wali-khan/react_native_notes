import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const OTPDemo = () => {
  const [Otp1, setOtp1] = useState('');
  const [Otp2, setOtp2] = useState('');
  const [Otp3, setOtp3] = useState('');
  const [Otp4, setOtp4] = useState('');

  const [Focused1, setFocused1] = useState(false);
  const [Focused2, setFocused2] = useState(false);
  const [Focused3, setFocused3] = useState(false);
  const [Focused4, setFocused4] = useState(false);

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const [OptError, setOptError] = useState('');

  const validateOpt = () => {
    const opt = '1234';
    const AllOpts = Otp1 + Otp2 + Otp3 + Otp4;
    if (AllOpts?.length !== 4) {
      setOptError('Please enter  4 digits OTP !');
    } else if (AllOpts !== opt) {
      setOptError('Wrong OPT Entered !');
    } else if (AllOpts != '' && AllOpts?.length === 4 && AllOpts == opt) {
      setOptError('');
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          width: '90%',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TextInput
          style={{
            width: 50,
            height: 50,
            borderWidth: 1,
            borderRadius: 5,
            fontSize: 20,
            fontWeight: '600',
            textAlign: 'center',
            borderColor: Focused1 || Otp1.length > 0 ? 'green' : 'red',
          }}
          ref={ref1}
          value={Otp1}
          onChangeText={text => {
            if (text?.length > 0) {
              ref2.current.focus();
            }
            setOtp1(text);
          }}
          onFocus={() => setFocused1(true)}
          onBlur={() => setFocused1(false)}
          keyboardType="number-pad"
          maxLength={1}
        />
        <TextInput
          style={{
            width: 50,
            height: 50,
            borderWidth: 1,
            borderRadius: 5,
            fontSize: 20,
            fontWeight: '600',
            textAlign: 'center',
            borderColor: Focused2 || Otp2.length > 0 ? 'green' : 'red',
          }}
          ref={ref2}
          value={Otp2}
          onChangeText={text => {
            if (text?.length > 0) {
              ref3.current.focus();
            } else {
              ref1.current.focus();
            }
            setOtp2(text);
          }}
          onFocus={() => setFocused2(true)}
          onBlur={() => setFocused2(false)}
          keyboardType="number-pad"
          maxLength={1}
        />
        <TextInput
          style={{
            width: 50,
            height: 50,
            borderWidth: 1,
            borderRadius: 5,
            fontSize: 20,
            fontWeight: '600',
            textAlign: 'center',
            borderColor: Focused3 || Otp3.length > 0 ? 'green' : 'red',
          }}
          value={Otp3}
          ref={ref3}
          onChangeText={text => {
            if (text?.length > 0) {
              ref4.current.focus();
            } else {
              ref2.current.focus();
            }
            setOtp3(text);
          }}
          onFocus={() => setFocused3(true)}
          onBlur={() => setFocused3(false)}
          keyboardType="number-pad"
          maxLength={1}
        />
        <TextInput
          style={{
            width: 50,
            height: 50,
            borderWidth: 1,
            borderRadius: 5,
            fontSize: 20,
            fontWeight: '600',
            textAlign: 'center',
            borderColor: Focused4 || Otp4.length > 0 ? 'green' : 'red',
          }}
          ref={ref4}
          value={Otp4}
          onChangeText={text => {
            if (text?.length < 1) {
              ref3.current.focus();
            }
            setOtp4(text);
          }}
          onFocus={() => setFocused4(true)}
          onBlur={() => setFocused4(false)}
          keyboardType="number-pad"
          maxLength={1}
        />
      </View>
      {OptError !== '' && (
        <Text style={{color: 'red', textAlign: 'center', marginTop: 20}}>
          {OptError}
        </Text>
      )}
      <TouchableOpacity
        onPress={() => {
          validateOpt();
        }}
        style={{
          width: '70%',
          borderRadius: 10,
          height: 50,
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTPDemo;
