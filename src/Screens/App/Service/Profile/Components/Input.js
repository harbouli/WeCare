import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {Fonts} from '../../../../../Constants';

const Input = ({Icone, ...props}) => {
  return (
    <View style={styles.container}>
      {Icone}
      <TextInput {...props} style={styles.InputField} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  InputField: {
    color: '#000',
    width: '100%',
    fontSize: 18,
    marginLeft: 15,
    fontFamily: Fonts.EC_Medium,
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 15,
  },
});
