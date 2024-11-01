import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import React, {useRef, useState} from 'react';
import Slider from './Slider';

const Animation2 = () => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const viewabilityConfigs = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setcurrentIndex(viewableItems[0].index);
    }
  }).current;

  return (
    <View style={{flex: 1}}>
      <FlatList
        horizontal
        data={[
          require('../../src/images/270172021_433799671720494_4691930721938189549_n.jpg'),
          require('../../src/images/270172021_433799671720494_4691930721938189549_n.jpg'),
          require('../../src/images/270172021_433799671720494_4691930721938189549_n.jpg'),
          require('../../src/images/270172021_433799671720494_4691930721938189549_n.jpg'),
        ]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <Slider image={item} index={index} currentIndex={currentIndex} />
          );
        }}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfigs}
      />
    </View>
  );
};

export default Animation2;
