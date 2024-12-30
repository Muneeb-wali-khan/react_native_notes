import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';
import SliderItem from './SliderItem';

const images = [
  require('../images/close-x-10323.png'),
  require('../images/heart-3510.png'),
  require('../images/search-7523.png'),
];

const ReAnimated7 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View style={{flex: 1}}>
      <FlatList
        onScroll={e => {
          const X = e.nativeEvent.contentOffset.x;
          setCurrentIndex((X / Dimensions.get('window').width / 1).toFixed(0));
          console.log(currentIndex);
        }}
        horizontal
        data={images}
        renderItem={({item, index}) => {
          return <SliderItem image={item} index={index} currentIndex={currentIndex}/>;
        }}
      />

      <View style={{marginTop: 10}}>
        <Text>ReAnimated7</Text>
        <Text>ReAnimated7</Text>
        <Text>ReAnimated7</Text>
        <Text>ReAnimated7</Text>
        <Text>ReAnimated7</Text>
        <Text>ReAnimated7</Text>
        <Text>ReAnimated7</Text>
        <Text>ReAnimated7</Text>
        <Text>ReAnimated7</Text>
        <Text>ReAnimated7</Text>
        <Text>ReAnimated7</Text>
        <Text>ReAnimated7</Text>
        <Text>ReAnimated7</Text>
        <Text>ReAnimated7</Text>
        <Text>ReAnimated7</Text>
        <Text>ReAnimated7</Text>
        <Text>ReAnimated7</Text>
        <Text>ReAnimated7</Text>
        <Text>ReAnimated7</Text>
        <Text>ReAnimated7</Text>
      </View>
    </View>
  );
};

export default ReAnimated7;
