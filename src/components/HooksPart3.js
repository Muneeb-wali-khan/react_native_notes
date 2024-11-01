import {View, Text, Button} from 'react-native';
import React, {useReducer, useState} from 'react';
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;

    case 'DICREMENT':
      return state - 1;

    default:
      state;
  }
};

const HooksPart3 = () => {
  const [Count, dispatch] = useReducer(reducer, 0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}>
        
      <Text style={{fontSize: 40, fontWeight: 'bold'}}>{Count}</Text>

      <View style={{alignSelf: 'center', gap: 20, flexDirection: 'row'}}>

        <Button onPress={()=> dispatch({type: "INCREMENT"})} title="Increment" />
        <Button onPress={()=> dispatch({type: "DICREMENT"})} title="Dicrement" />
      </View>
    </View>
  );
};

export default HooksPart3;
