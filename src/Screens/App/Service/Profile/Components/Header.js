import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {Fonts, SVG} from '../../../../../Constants';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.goBack()}>
        <SVG.X />
      </Pressable>
      <View style={styles.title}>
        <Text style={styles.textTitle}>My information</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    marginLeft: 15,
  },
  textTitle: {
    color: '#000',
    fontFamily: Fonts.EC_Bold,
    fontSize: 30,
  },
});
