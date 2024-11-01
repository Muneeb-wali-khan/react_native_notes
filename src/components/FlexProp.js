import { View, Text } from 'react-native'
import React from 'react'

// align-self with parent and flex properties
// align self means the parent component position

const FlexProp = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'column',
        gap: 20,
        alignItems: 'flex-end',
        justifyContent: "space-evenly",
      }}>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20}}>Box 1</Text>
      </View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20}}>Box 2</Text>
      </View>
    </View>
  );
};



export default FlexProp