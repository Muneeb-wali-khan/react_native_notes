import {View, Text} from 'react-native';
import React from 'react';

const TextFlatListDemo3 = () => {
  // [ wrap ] will pull down the text to the next line if it is too long
  // [now wrap] will not pull down the text to the next line if it is too long
  return (
    <View style={{flex: 1}}>
      <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
        {[
          'Class 1',
          'Class 2',
          'Class 3',
          'Class 4',
          'Class 5',
          'Class 6',
          'Class 7 and 8 and 9 and 10 and 11 class 12 class 13 class 14',
        ].map((item, index) => {
          return (
            <Text
              key={index}
              style={{
                backgroundColor: 'blue',
                color: 'white',
                marginLeft: 25,
                borderRadius: 10,
                marginTop: 15,
                paddingLeft: 10,
                paddingRight: 10,
                padding: 5,
              }}>
              {item}
            </Text>
          );
        })}
      </View>
    </View>
  );
};

export default TextFlatListDemo3;
