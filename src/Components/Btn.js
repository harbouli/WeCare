import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../Constants';
import {Displayer} from '../Utils';

const {setWidth} = Displayer;
const Btn = ({children, onPress}) => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }
  return (
    <ButtonComponent activeOpacity={0.6} onPress={onPress}>
      <View style={styles.Box}>
        <Text style={styles.Title}>{children}</Text>
      </View>
    </ButtonComponent>
  );
};

export default Btn;

const styles = StyleSheet.create({
  Box: {
    backgroundColor: Colors.Blue,
    width: setWidth(80),
    height: 70,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    fontFamily: Fonts.EC_Bold,
    fontSize: 24,
    color: '#fff',
  },
});
