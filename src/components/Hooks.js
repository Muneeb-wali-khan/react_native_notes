import {View, Text, Button, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';

const Hooks = () => {
  const [Count, setCount] = useState(0);

  // 1st time and on condition based
  useEffect(() => {
    console.log('Hello 1');
    // Alert.alert("Hello")
  }, [Count]);

  // every time call
  useEffect(() => {
    console.log('Hello 2');
  });

  // only one time call
  useEffect(() => {
    console.log('Hello 3');
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>{Count}</Text>
      <View style={{marginTop: 20}}>
        <Button onPress={() => setCount(Count + 1)} title="Change Count" />
      </View>
    </View>
  );
};

export default Hooks;
