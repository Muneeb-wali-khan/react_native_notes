import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const CommonButton = ({color, bg, w, h, title, PressBtn,br}) => {
  return (
    <TouchableOpacity
      onPress={PressBtn}
      style={{
        backgroundColor: bg,
        width: w,
        height: h,
        borderRadius: br ? br : 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: color, fontWeight: 'bold'}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;
