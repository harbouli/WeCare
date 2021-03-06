import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Displayer} from '../Utils';
import {Colors, Fonts} from '../Constants';
const {setWidth, setHeight} = Displayer;
const RadioButton = React.forwardRef(({PROP}, RadioRef) => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.Holder}>
      {PROP.map(res => {
        return (
          <TouchableOpacity
            key={res.key}
            style={styles.container}
            onPress={() => {
              RadioRef.current = res.key;
              // console.log(RadioRef.current);
              setValue(RadioRef.current);
            }}>
            <Text style={styles.radioText}>{res.text}</Text>
            <View style={styles.radioCircle}>
              {value === res.key && <View style={styles.selectedRb} />}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
});

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: Colors.Default_Gray,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: setWidth(43),
  },
  radioText: {
    marginRight: 35,
    fontSize: 18,
    color: '#000',
    fontFamily: Fonts.EC_Medium,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Colors.Blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: Colors.Blue,
  },

  Holder: {
    width: setWidth(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
