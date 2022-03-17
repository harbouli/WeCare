import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const CircleBtn = ({children, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <View style={[styles.circle]}>{children}</View>
    </TouchableOpacity>
  );
};

export default CircleBtn;

const styles = StyleSheet.create({
  circle: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 10,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
});
