import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';

const InputsEvents = () => {
  const [name, setName] = useState('');
  const [Mobile, setMobile] = useState('');
  const [borderC, setBorderC] = useState(false);
  const [BadName, setBadName] = useState('');
  const [BadMobile, setBadMobile] = useState('');
  const mobileRef = useRef()

  const validate = () => {
    if (name === '') {
      setBadName('Enter Your Name Please !');
    } else if (name?.length < 2) {
      setBadName('Please Enter a Valid Name !');
    } else if (name !== '' && name?.length > 2) {
      setBadName('');
    }

    if (Mobile === '') {
      setBadMobile('Enter Your Mobile Please !');
    } else if (Mobile?.length < 10) {
      setBadMobile('Please Enter a Valid Mobile !');
    } else if (Mobile !== '' && Mobile?.length == 10) {
      setBadMobile('');
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
      }}>
      <TextInput
        style={{
          width: '90%',
          height: 50,
          borderWidth: 2,
          borderRadius: 10,
          paddingLeft: 15,
          borderColor: BadName && BadName?.length < 2  ? 'red' : 'green',
        }}
        // onChangeText
        onChangeText={e => {
          setName(e);
        }}
        // onFocus
        onFocus={() => {
          setBorderC(true);
          console.log('focused');
        }}
        // onSubmitEditing
        onSubmitEditing={() => {
          // when submit the cursor will move the next field
          mobileRef.current.focus()
        }}
        // onBlur
        onBlur={() => {
          setBorderC(false);
          console.log('blur called');
        }}
        // editable
        // editable={false} // true(default)/false

        // autoFocus
        autoFocus={true}

        // returnKeyType
        returnKeyType="next"

        // maxLength
        // maxLength={4}

        // multiline break and add new line
        // multiline={true}

        // keyboardType
        keyboardType="default"
        placeholder="Enter you Name"
        value={name}
      />

      {/* validattion error name */}
      {BadName !== '' && (
        <Text
          style={{
            alignSelf: 'flex-start',
            color: 'red',
            marginLeft: 20,
            marginTop: 5,
          }}>
          {BadName}
        </Text>
      )}

      <TextInput
        style={{
          width: '90%',
          height: 50,
          borderWidth: 2,
          borderRadius: 10,
          paddingLeft: 15,
          borderColor: BadMobile?.length < 11 ? 'green' : 'red',
        }}
        ref={mobileRef}
        // onChangeText
        onChangeText={text => {
          setMobile(text);
        }}
        maxLength={10}
        // keyboardType
        keyboardType="number-pad"
        placeholder="Enter Mobile"
        value={Mobile}
      />

      {/* validattion error name */}
      {BadMobile !== '' && (
        <Text
          style={{
            alignSelf: 'flex-start',
            color: 'red',
            marginLeft: 20,
          }}>
          {BadMobile}
        </Text>
      )}

      <TouchableOpacity
        onPress={() => {
          validate();
        }}
        style={{
          width: '90%',
          borderRadius: 10,
          height: 50,
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputsEvents;

// value
// multiline || false(default)/true so the text will break in input feild to next line
// onChangeText || can directly get the value if desire input field
// onBlur || focus oppposite is blur means when cursor is not blinking inside the input
// onFocus || means when you enter to the input
// keyboardType || can select any type of keyboard
// maxLength  || you can limit text and numbers
// editable || true by default and false so cannot edit the input field
// autoFocus || when window loads input will set focus auto to type directly
// secureTextEntry
// returnKeyType || change the submit button property
// onSubmit
// onSubmitEditing || means when you done you input text and click on the keyboard submit button or check button
