import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Displayer} from '../Utils';
import {Colors, Fonts, Images} from '../Constants';

const {setHeight, setWidth} = Displayer;
const WelcomCard = ({Img, title, Description}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode="contain" source={Images[Img]} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{Description}</Text>
    </View>
  );
};

export default WelcomCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: setWidth(100),
  },
  image: {
    width: setWidth(60),
    height: setHeight(30),
  },
  title: {
    fontSize: 24,
    fontFamily: Fonts.EC_Bold,
    color: '#000',
  },
  description: {
    textAlign: 'center',
    marginHorizontal: 20,
    fontSize: 20,
    color: Colors.Dark_Gray,
    fontFamily: Fonts.EC_Light,
  },
});
