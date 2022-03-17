import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

import {Displayer} from '../../../Utils';
import {Colors, Fonts} from '../../../Constants';
import {
  ScreensTheme,
  RadiosButton,
  NextBtn,
  Separator,
} from '../../../Components';

const Checkbox = [
  {
    key: 'Femme',
    text: 'Femme',
  },
  {
    key: 'Homme',
    text: 'Homme',
  },
];

const {setWidth, setHeight} = Displayer;
const MoreInfoAcountScreen = ({navigation}) => {
  return (
    <ScreensTheme Title={'Complete Account'} goBack={true}>
      <View style={styles.Auth}>
        <Text style={styles.Text}>C’est rapide et facile.</Text>
        <View style={styles.fullName}>
          <TextInput type="default" placeholder="Prénom" width={setWidth(43)} />
          <TextInput
            placeholder="Nom de famille"
            type="default"
            width={setWidth(43)}
          />
        </View>
        <View style={styles.line}>
          <RadiosButton PROP={Checkbox} />
        </View>
        <View style={styles.line}>
          <TextInput placeholder="Age" type="number-pad" width={setWidth(30)} />
        </View>
        <Separator height={20} />
        <NextBtn onPress={() => navigation.navigate('WeeCareWelcome')}>
          Next
        </NextBtn>
      </View>
    </ScreensTheme>
  );
};

export default MoreInfoAcountScreen;

const styles = StyleSheet.create({
  Auth: {
    width: setWidth(90),

    alignSelf: 'center',
  },
  Text: {
    color: Colors.Dark_Gray,
    fontSize: 20,
    marginTop: 52,
    marginBottom: 20,
    fontFamily: Fonts.EC,
  },
  fullName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  line: {
    marginTop: 20,
  },
});
