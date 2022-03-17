import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Displayer} from '../Utils';
import {Colors, Fonts} from '../Constants';
const {setWidth, setHeight} = Displayer;

const BoxLogin = ({children, title, onPress}) => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <ButtonComponent activeOpacity={0.6} onPress={onPress}>
      <View style={styles.Box}>
        {children}
        <Text style={styles.Title}>{title}</Text>
      </View>
    </ButtonComponent>
  );
};

export default BoxLogin;

const styles = StyleSheet.create({
  Box: {
    backgroundColor: Colors.GREEN,
    paddingHorizontal: 25,
    paddingVertical: 20,
    width: setWidth(85),
    borderRadius: 5,
    flexDirection: 'row',
    marginVertical: 30,
  },
  Title: {
    fontFamily: Fonts.EC_Bold,
    fontSize: 16,
    color: '#fff',
    marginHorizontal: 30,
    alignSelf: 'center',
  },
});
