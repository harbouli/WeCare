import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';

import {Displayer} from '../../../Utils';
import {Colors, Fonts} from '../../../Constants';
import {ScreensTheme, NextBtn, Separator} from '../../../Components';
import {useDispatch, useSelector} from 'react-redux';
import UserAction from '../../../Store/Actions/UserAction';

const {setWidth, setHeight} = Displayer;

const AgeScreen = ({navigation}) => {
  const {user} = useSelector(state => state.User);

  const dispatch = useDispatch();
  const [age, setAge] = useState(user.age);

  return (
    <ScreensTheme Title={'Age'} goBack={false}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.Auth}>
            <Text style={styles.Text}>C’est rapide et facile.</Text>
            <View style={styles.HolderContainer}>
              <View style={styles.fullName}>
                <TextInput
                  value={age}
                  onChangeText={inputValue =>
                    setAge(inputValue.replace(/[^0-9]/g, ''))
                  }
                  keyboardType="number-pad"
                  placeholder="Age"
                  width={setWidth(20)}
                  style={styles.TextField}
                />
              </View>

              <Separator height={20} />
              <NextBtn
                onPress={() => {
                  navigation.navigate('WeeCareStart');
                  dispatch(UserAction.adduser({...user, age}));
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

export default AgeScreen;

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
    justifyContent: 'center',
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
