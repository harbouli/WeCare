import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {Colors, Fonts, SVG} from '../Constants';
import {Displayer} from '../Utils';

const {setHeight, setWidth} = Displayer;

const ScreensThem = ({children, goBack, Title}) => {
  return (
    <View style={styles.Screen}>
      <StatusBar backgroundColor={Colors.Blue} barStyle="light-content" />
      <SafeAreaView>
        <View style={styles.Header}>
          {goBack && <SVG.ArrowBlack />}
          <Text style={styles.Title}>{Title}</Text>
        </View>
        <View style={styles.Body}>{children}</View>
      </SafeAreaView>
    </View>
  );
};

export default ScreensThem;

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    backgroundColor: Colors.Blue,
  },
  Header: {
    width: '100%',
    paddingVertical: 15,
    height: setHeight(15),
    justifyContent: 'space-between',
    width: setWidth(90),
    alignSelf: 'center',
    // backgroundColor: '#efefef',
  },
  Title: {
    color: '#fff',
    fontFamily: Fonts.EC_Medium,
    fontSize: 28,
  },
  Body: {
    backgroundColor: '#fff',
    width: '100%',
    height: setHeight(80),
    borderTopLeftRadius: 52,
    borderTopRightRadius: 52,
  },
});
