import {View, Text} from 'react-native';

const Views = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <View style={{flex: 2, backgroundColor: 'green'}}></View>
      <View style={{flex: 4, backgroundColor: 'orange'}}></View>
      <View style={{flex: 2, backgroundColor: 'cyan'}}></View>
    </View>
  );
};

export default Views;
