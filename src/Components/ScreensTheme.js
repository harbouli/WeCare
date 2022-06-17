import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Pressable,
} from 'react-native';
import React from 'react';
import {Colors, Fonts, SVG} from '../Constants';
import {Displayer} from '../Utils';
import {useNavigation} from '@react-navigation/native';

const {setHeight, setWidth} = Displayer;

const ScreensThem = ({children, goBack, Title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.Screen}>
      <StatusBar backgroundColor={Colors.Blue} barStyle="light-content" />
      <SafeAreaView>
        <Pressable onPress={() => navigation.goBack()}>
          <View
            style={[
              styles.Header,
              {justifyContent: !goBack ? 'center' : 'space-between'},
            ]}>
            {goBack && <SVG.ArrowBlack />}
            <Text style={[styles.Title]}>{Title}</Text>
          </View>
        </Pressable>
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
    paddingVertical: 10,
    height: setHeight(17.5),
    // justifyContent: 'space-between',
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
    height: setHeight(82.5),
    borderTopLeftRadius: 52,
    borderTopRightRadius: 52,
  },
});
