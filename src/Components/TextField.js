import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../Constants';

const TextField = ({width, placeholder, type}) => {
  return (
    <View style={[styles.TextField, {width}]}>
      <TextInput
        keyboardType={type}
        placeholderTextColor={Colors.Default_Gray}
        placeholder={placeholder}
        style={styles.TextInput}
      />
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  TextField: {
    borderWidth: 2,
    borderColor: Colors.Default_Gray,
    borderRadius: 5,
  },
  TextInput: {
    paddingHorizontal: 10,
    color: Colors.Dark_Gray,
    fontFamily: Fonts.EC,
    fontSize: 16,
  },
});
