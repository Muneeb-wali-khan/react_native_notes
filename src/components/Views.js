import {View, Text} from 'react-native';

const Views = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <View style={{flex: 2.5, backgroundColor: 'green'}}></View>
      <View style={{flex: 3.5, backgroundColor: 'orange'}}></View>
      <View style={{flex: 2.5, backgroundColor: 'cyan'}}></View>
    </View>
  );
};

export default Views;
