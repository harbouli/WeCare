import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {Colors, Fonts, SVG} from '../Constants';

const ChoserWithIcone = ({title, Svg, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.Icone}>{Svg}</View>
        <Text style={styles.Title}>{title}</Text>
        <SVG.ToRight />
      </View>
    </Pressable>
  );
};

export default ChoserWithIcone;

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Icone: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: Colors.Light_Gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    color: Colors.Dark_Gray,
    fontFamily: Fonts.EC_Bold,
    fontSize: 22,
  },
});
