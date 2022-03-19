import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {CircleBtn} from '../../../Components/';
import GeneralStorage from '../../../Store/Storage/GeneralStorage';
import GeneralAction from '../../../Store/Actions/GeneralAction';
import UserAction from '../../../Store/Actions/UserAction';
import {Colors, Fonts, SVG} from '../../../Constants';
import {Displayer} from '../../../Utils';

const {setWidth, setHeight} = Displayer;

const HomeScreenService = ({navigation}) => {
  const dispatch = useDispatch();
  const SinOutBtn = async () => {
    dispatch(GeneralAction.setIsAppLoading(true));
    await GeneralStorage.setUser(false.toString()).then(() => {
      dispatch(GeneralAction.setUser(false));
      dispatch(UserAction.addUID(''));
      auth()
        .signOut()
        .then(() => console.log('SingOut'));
    });

    dispatch(GeneralAction.setIsAppLoading(false));
  };

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
});
