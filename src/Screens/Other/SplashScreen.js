import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {Colors, Fonts, Lottie, SVG} from '../../Constants';
import LottieView from 'lottie-react-native';
import {Displayer} from '../../Utils';

const {setWidth} = Displayer;
const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor={Colors.Blue} barStyle="light-content" />
      <View style={styles.LogoHolder}>
        <SVG.Logo width={100} height={100} />
        <Text style={styles.LogoText}>WeeCare</Text>
      </View>
      <LottieView
        source={Lottie.DotsLoader}
        style={{
          height: setWidth(50),
          position: 'absolute',
          bottom: 5,
        }}
        autoPlay
        loop
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.Blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LogoHolder: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  LogoText: {
    color: '#fff',
    fontFamily: Fonts.EC_Bold,
    fontSize: 52,
  },
});
