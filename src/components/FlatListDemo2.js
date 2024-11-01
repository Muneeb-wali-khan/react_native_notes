import {View, Text, ScrollView, FlatList} from 'react-native';
import React from 'react';

// INDEX BASED UI 
const FlatListDemo2 = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={[1, 2, 3, 4,5]} // add digits depends on sections you add to screen
        renderItem={({item, index}) => {
          return (
            <View key={index} style={{width: '100%', marginTop: 20}}>
              {index == 0 && (
                <View
                  style={{
                    backgroundColor: '#939393',
                    width: '90%',
                    height: 150,
                    borderRadius: 10,
                    alignSelf: 'center',
                    marginTop: 10,
                  }}></View>
              )}
              {/* categories UI */}
              {index === 1 && (
                <Text style={{fontSize: 20, marginLeft: 21,marginTop:10, fontWeight: '900'}}>
                  Categories
                </Text>
              )}
              {index == 1 && (
                <FlatList
                  data={[1, 2, 3, 4, 5]}
                  horizontal
                  style={{marginTop: 10}}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({data1}) => {
                    return (
                      <View
                        key={data1}
                        style={{
                          backgroundColor: 'seagreen',
                          width: 100,
                          height: 100,
                          marginTop:10,
                          borderRadius: 10,
                          marginLeft:15,
                        }}></View>
                    );
                  }}
                />
              )}

              {/* TRENDING iTEMS */}
              {index === 2 && (
                <Text style={{fontSize: 20, marginLeft: 21,marginTop:10, fontWeight: '900'}}>
                  Trending Items
                </Text>
              )}
              {index == 2 && (
                <FlatList
                  data={[1, 2, 3, 4, 5]}
                  horizontal
                  style={{marginTop: 10}}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({data1}) => {
                    return (
                      <View
                        key={data1}
                        style={{
                          backgroundColor: 'seagreen',
                          width: 200,
                          height: 150,
                          marginTop:10,
                          borderRadius: 10,
                          marginLeft:15,
                        }}></View>
                    );
                  }}
                />
              )}

              {/* New Products */}
              {index === 3 && (
                <Text style={{fontSize: 20, marginLeft: 21,marginTop:10, fontWeight: '900'}}>
                 New Products
                </Text>
              )}
              {index == 3 && (
                <FlatList
                  data={[1, 2, 3, 4, 5]}
                  style={{marginTop: 10}}
                  renderItem={({data1}) => {
                    return (
                      <View
                        key={data1}
                        style={{
                          backgroundColor: 'seagreen',
                          width:"90%",
                          alignSelf:"center",
                          marginTop:10,
                          height: 150,
                          borderRadius: 10,
                        }}></View>
                    );
                  }}
                />
              )}
              
            </View>
          );
        }}
      />
    </View>
  );
};

export default FlatListDemo2;
