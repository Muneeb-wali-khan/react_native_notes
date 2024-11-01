import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import React from 'react';

const Buttons = () => {
  return (
    <>
      {/* button 1 */}
      <View
        style={{
          flex: 1,
          gap: 20,
          alignItems: 'center',
          marginTop: 50,
          flexDirection: 'column',
        }}>
        <TouchableOpacity
          //   activeOpacity={0.5}
          style={{
            width: '60%',
            padding: 10,
            borderRadius: 10,
            backgroundColor: 'yellow',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20}}>Click</Text>
        </TouchableOpacity>
      </View>

      {/* button 2 */}
      <View
        style={{
          flex: 1,
          gap: 20,
          alignItems: 'center',
          marginTop: 50,
          flexDirection: 'column',
        }}>
        <TouchableHighlight
          underlayColor={'orange'}
          onPress={() => {}}
          style={{
            width: '60%',
            padding: 10,
            borderRadius: 10,
            backgroundColor: 'yellow',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{fontSize: 20}}>Click</Text>
          </View>
        </TouchableHighlight>
      </View>

      {/* Button 3 */}
      <View
        style={{
          flex: 3,
          gap: 20,
          alignItems: 'center',
          marginTop: 50,
          flexDirection: 'column',
        }}>
        {/* button 3 */}
        <TouchableWithoutFeedback>
          <View
            style={{
              width: '60%',
              padding: 10,
              borderRadius: 10,
              backgroundColor: 'yellow',
              justifyContent: 'center',
              flexDirection: 'row',
              gap: 20,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20}}>Click</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

export default Buttons;

// BUTTONS
// 1) TouchableOpacity  || can add multiple childs
// 2) TouchableHighlight || only add single child inside button class but inside child can add many
// 3) TouchableWithoutFeedback || only one child inside child add many childs  style property not work on parent button class you can give to child
