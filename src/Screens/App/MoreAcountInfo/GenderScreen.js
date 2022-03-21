import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';

import {Displayer} from '../../../Utils';
import {Colors, Fonts} from '../../../Constants';
import {
  ScreensTheme,
  RadiosButton,
  NextBtn,
  Separator,
} from '../../../Components';
import UserAction from '../../../Store/Actions/UserAction';
import {useDispatch, useSelector} from 'react-redux';

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
const GenderScreen = ({navigation}) => {
  const {UID: uidS} = useSelector(state => state.User);
  console.log(uidS);
  const dispatch = useDispatch();
  return (
    <ScreensTheme Title={'Gender'} goBack={false}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.Auth}>
            <Text style={styles.Text}>C’est rapide et facile.</Text>
            <View style={styles.HolderContainer}>
              <View style={styles.fullName}>
                <RadiosButton PROP={Checkbox} />
              </View>

              <Separator height={20} />
              <NextBtn
                onPress={() => {
                  navigation.navigate('Gender');
                  dispatch(UserAction.adduser());
                }}>
                Next
              </NextBtn>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScreensTheme>
  );
};

export default GenderScreen;

const styles = StyleSheet.create({
  Auth: {
    width: setWidth(90),
    height: '100%',
    alignSelf: 'center',
    // justifyContent: 'center',
    position: 'relative',
  },
  Text: {
    color: Colors.Dark_Gray,
    fontSize: 20,
    marginTop: 52,
    marginBottom: 20,
    fontFamily: Fonts.EC,
    // position: 'absolute',
    // top: 0,
  },
  fullName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 120,
  },
  line: {
    marginTop: 20,
  },
  TextField: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.Default_Gray,
    color: Colors.Dark_Gray,
    fontFamily: Fonts.EC,
  },
  HolderContainer: {
    height: '45%',
    justifyContent: 'center',
  },
});
