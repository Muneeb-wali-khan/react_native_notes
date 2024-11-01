import {View, Text, Button} from 'react-native';
import React from 'react';

// we can wrap the component in memo() so that this will realod only once 

const UseCallBackExe = React.memo(({incrementFunc, decrementFunc}) => {
  // you will see this message when clicking and changing anything in hookspart4 component
  console.log('button called');

  return (
    <View style={{gap: 20}} >
      <Button title="add" onPress={incrementFunc} />
      <Button title="subtract" onPress={decrementFunc} />
    </View>
    
  );

});

export default UseCallBackExe;
