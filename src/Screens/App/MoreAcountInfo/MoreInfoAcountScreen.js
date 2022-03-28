import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {Displayer} from '../../../Utils';
import {Colors, Fonts} from '../../../Constants';
import {ScreensTheme, NextBtn, Separator} from '../../../Components';
import {useDispatch, useSelector} from 'react-redux';
import UserAction from '../../../Store/Actions/UserAction';
import GeneralAction from '../../../Store/Actions/GeneralAction';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const {setWidth, setHeight} = Displayer;
const MoreInfoAcountScreen = ({navigation}) => {
  const {user} = useSelector(state => state.User);

  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    dispatch(GeneralAction.setIsAppLoading(true));

    const isAuth = auth().currentUser;
    if (isAuth && !isAuth.isAnonymous) {
      firestore()
        .collection('users')
        .doc(isAuth.uid)
        .get()
        .then(userData => {
          setUserInfo(userData._data);
          // console.log(userData);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      dispatch(GeneralAction.setIsAppLoading(false));
    }
  }, []);
  useEffect(() => {
    dispatch(GeneralAction.setIsAppLoading(false));

    dispatch(
      UserAction.adduser({
        firstname: userInfo.firstname,
        lastname: userInfo.lastname,
        gender: userInfo.gender,
        age: userInfo.age,
        complete: userInfo.confirm,
      }),
    );
  }, [userInfo]);

  return (
    <ScreensTheme Title={'FullName'} goBack={false}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.Auth}>
            <Text style={styles.Text}>C’est rapide et facile.</Text>
            <View style={styles.HolderContainer}>
              <View style={styles.fullName}>
                <TextInput
                  value={firstname}
                  onChangeText={value => setFirstname(value)}
                  keyboardType="default"
                  placeholder="Prénom"
                  width={setWidth(43)}
                  style={styles.TextField}
                />
                <TextInput
                  placeholder="Nom de famille"
                  value={lastname}
                  onChangeText={value => setLastname(value)}
                  keyboardType="default"
                  width={setWidth(43)}
                  style={styles.TextField}
                />
              </View>

              <Separator height={20} />
              <NextBtn
                onPress={() => {
                  navigation.navigate('Gender');
                  dispatch(UserAction.adduser({...user, firstname, lastname}));
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

export default MoreInfoAcountScreen;

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
