import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';

const WelcomeIntro = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = event => {
    // contentOffset.x ===> horizontal scroll
    // contentOffset.y ===> vertical scroll
    // Dimensions.get('window').width ===> width of the screen
    setCurrentIndex(
      Math.floor(
        event.nativeEvent.contentOffset.x / Dimensions.get('window').width,
      ),
    );
  };

  // we useRef() to access the dom level elements of flatlist
  const ref = useRef();

  const handlePrev = () => {
    ref.current.scrollToIndex({
      animated: true,
      index: parseInt(currentIndex) - 1,
    });
    setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    ref.current.scrollToIndex({
      animated: true,
      index: parseInt(currentIndex) + 1,
    });
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <FlatList
          onScroll={handleScroll}
          data={data}
          ref={ref} // by this we can scroll and access the dom level elements of flatlist
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 50}}
          renderItem={items => {
            const {item, index} = items;
            return (
              <View
                style={{
                  height: 200,
                  width: Dimensions.get('window').width, // equals the mobile screen cards
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    height: '100%',
                    width: '90%', // equals the mobile screen cards
                    backgroundColor: index % 2 == 0 ? 'red' : 'green',
                  }}></View>
              </View>
            );
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 50,
          alignSelf: 'center',
          gap: 20,
        }}>
        {data.map((item, index) => (
          <View
            key={index}
            style={{
              width: 8,
              height: 7,
              borderRadius: 2.5,
              backgroundColor: currentIndex == index ? 'red' : 'black',
            }}></View>
        ))}
      </View>

      <View
        style={{
          width: '100%',
          position: 'absolute',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          alignItems: 'center',
          bottom: 40,
        }}>
        {currentIndex > 0 && (
          <TouchableOpacity
            onPress={handlePrev}
            style={{
              width: 100,
              height: 50,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'red',
              borderRadius: 17,
            }}>
            <Text style={{color: 'white', fontSize: 17}}>Previous</Text>
          </TouchableOpacity>
        )}
        {currentIndex < data.length - 1 && (
          <TouchableOpacity
            onPress={handleNext}
            style={{
              width: Dimensions.get("window").width / 3,
              height: 50,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 17,
              backgroundColor: 'red',
            }}>
            <Text style={{color: 'white', fontSize: 17}}>Next</Text>
          </TouchableOpacity>
        )}

        {currentIndex == data.length - 1 && (
          <TouchableOpacity
            onPress={handleNext}
            style={{
              width: Dimensions.get("window").width / 2,
              height: 50,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 17,
              backgroundColor: 'red',
            }}>
            <Text style={{color: 'white', fontSize: 17}}>Go to Dashboard</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default WelcomeIntro;

// flatlist taken three arguments

// data || data array of items
// render item || callback function to show the items return Ui
// horizontal/vertical || default vertical and you change to horizontal by horizontal
// number of coulums ---- vertical
// keyExtractor
// showsHorizontalScrollIndicator || true will scroll else false
// listFooterComponent
// style
// contentContainerStyle
// ref
// pagingEnabled || this will prevent half pagination of card like scroll full or show one
// onScroll
