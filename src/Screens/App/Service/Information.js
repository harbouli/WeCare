import {StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native';
import React from 'react';
import {ScreensTheme} from '../../../Components';
import {Colors, Fonts, SVG} from '../../../Constants';
import {Displayer} from '../../../Utils';

const {setWidth, setHeight} = Displayer;
const Information = () => {
  return (
    <ScreensTheme Title={'More Information'} goBack={true}>
      <View style={styles.container}>
        <Text style={styles.textH2}>Medicale Result</Text>
        <TouchableNativeFeedback>
          <View style={styles.Holder}>
            <SVG.Image />
          </View>
        </TouchableNativeFeedback>
      </View>
    </ScreensTheme>
  );
};

export default Information;

const styles = StyleSheet.create({
  textH2: {
    fontFamily: Fonts.EC_Bold,
    color: Colors.Dark_Gray,
    fontSize: 20,
  },
  container: {
    paddingTop: 30,
    flex: 1,
    alignSelf: 'center',
    width: setWidth(90),
  },
  Holder: {
    width: setWidth(90),
    height: 120,
    backgroundColor: Colors.Default_Gray,
    borderRadius: 20,
    marginTop: 20,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
