import React from 'react';
import { View } from 'react-native';
import Dropdown from 'react-native-smooth-drop-down';

const CustomDropDown = () => {
  const items = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
    { label: 'Option 4', value: '4' },
    { label: 'Option 5', value: '5' },
    { label: 'Option 6', value: '6' },
  ];

  const handleSelect = (item) => {
    console.log('Selected Item:', item);
  };

  return (
    <View style={{ padding: 20 }}>
      <Dropdown
        items={items}
        onSelect={handleSelect}
        placeholder="Choose an option"
        containerStyle={{ backgroundColor: '#f8f8f8', borderRadius: 10}}
        dropdownStyle={{ borderColor: '#007bff',padding:15 }}
        placeholderStyle={{ fontSize: 14, color: '#333' }}
        itemStyle={{ backgroundColor: '#f0f0f0', borderBottomWidth: 1, borderColor: '#ddd' }}
        itemTextStyle={{ fontSize: 14, color: '#007bff' }}
      />
    </View>
  );
};

export default CustomDropDown;
