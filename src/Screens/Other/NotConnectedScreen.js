import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {Colors, Fonts, Lottie} from '../../Constants';
import {Displayer} from '../../Utils';

const {setWidth, setHeight} = Displayer;

const NotConnectedScreen = () => {
  return (
    <View style={styles.Container}>
      <LottieView
        source={Lottie.NoInternet}
        style={{
          // width: setWidth(80),
          height: setWidth(50),
        }}
        autoPlay
        loop
      />
      <Text style={styles.Text}>Please Check Your Internet</Text>
    </View>
  );
};

export default NotConnectedScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.Blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontFamily: Fonts.EC_Bold,
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    width: setWidth(80),
  },
});
