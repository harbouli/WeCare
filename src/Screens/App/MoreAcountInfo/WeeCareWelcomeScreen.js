import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Displayer} from '../../../Utils';
import {Colors, Fonts, Images, SVG} from '../../../Constants';
import {Btn} from '../../../Components';
import {useSelector} from 'react-redux';

const {setWidth, setHeight} = Displayer;

const WeeCareWelcomeScreen = () => {
  const {user} = useSelector(state => state.User);
  console.log(user);
  return (
    <View style={styles.Screen}>
      <View style={styles.Header}>
        <View style={styles.Shape}>
          <SVG.Shape />
        </View>
        <View style={styles.Circuls}>
          <Image source={Images.Circuls} style={styles.Circuls} />
        </View>
      </View>
      <View style={styles.Body}>
        <Text style={styles.TextTitle}>Welcome to WeeCare</Text>
        <Text style={styles.TextDescription}>
          You're all set up and ready to get lab test at home Direct to your
          seat!
        </Text>
        <Btn onPress={() => {}}>Done</Btn>
      </View>
    </View>
  );
};

export default WeeCareWelcomeScreen;

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Header: {
    width: setWidth(100),
    height: setHeight(30),
    backgroundColor: Colors.Blue,
  },
  Shape: {
    position: 'absolute',
    top: setHeight(25),
  },
  Circuls: {
    width: setWidth(120),
    height: setWidth(120),
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: -20,
  },
  Body: {
    height: setHeight(70),
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextTitle: {
    fontFamily: Fonts.EC_Bold,
    color: '#0C0C43',
    fontSize: 28,
  },
  TextDescription: {
    width: setWidth(80),
    textAlign: 'center',
    marginVertical: 30,
    fontFamily: Fonts.EC,
    color: Colors.Dark_Gray,
    fontSize: 18,
  },
});
