import {
  StatusBar,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {CircleBtn} from '../../../Components/';
import GeneralStorage from '../../../Store/Storage/GeneralStorage';
import GeneralAction from '../../../Store/Actions/GeneralAction';
import UserAction from '../../../Store/Actions/UserAction';
import {Colors, Fonts, Images, SVG} from '../../../Constants';
import {Displayer} from '../../../Utils';

const {setWidth, setHeight} = Displayer;

const HomeScreenService = () => {
  const dispatch = useDispatch();
  const SinOutBtn = async () => {
    dispatch(GeneralAction.setIsAppLoading(true));
    await GeneralStorage.setUser(false.toString()).then(() => {
      dispatch(GeneralAction.setUser(false));
      GeneralStorage.setUID('')
        .then(() => dispatch(UserAction.addUID('')))
        .then(() => dispatch(UserAction.adduser('')));

      auth()
        .signOut()
        .then(() => console.log('SingOut'));
    });

    dispatch(GeneralAction.setIsAppLoading(false));
  };
  const {UID: uidS} = useSelector(state => state.User);
  return (
    <GestureHandlerRootView style={styles.screen}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      {/* Header  */}
      <View style={styles.header}>
        <CircleBtn onPress={SinOutBtn}>
          <SVG.Profile />
        </CircleBtn>
        <View style={styles.Logo}>
          <SVG.LogoBlue />
        </View>
      </View>
      {/* Illustratur */}
      <Image
        source={Images.Illustration}
        style={styles.Illustration}
        resizeMode="contain"
      />
      {/* Your Location Google AutoComplete  */}
      <View style={styles.Body}>
        <Text style={styles.LocationText}>Your Location</Text>
        <TextInput style={styles.AutoComplete} />
      </View>
    </GestureHandlerRootView>
  );
};

export default HomeScreenService;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {flexDirection: 'row', padding: 20},
  Logo: {
    marginLeft: 20,
  },
  Illustration: {
    alignSelf: 'center',
    width: setWidth(90),
    height: setHeight(30),
  },
  LocationText: {
    fontSize: 24,
    fontFamily: Fonts.EC_Bold,
    color: Colors.Dark_Gray,
  },
  Body: {
    width: setWidth(90),
    height: setHeight(90),
    alignSelf: 'center',
    paddingTop: 10,
  },
});
