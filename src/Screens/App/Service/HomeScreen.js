import {
  StatusBar,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {CircleBtn} from '../../../Components/';
import GeneralStorage from '../../../Store/Storage/GeneralStorage';
import GeneralAction from '../../../Store/Actions/GeneralAction';
import {Colors, Fonts, SVG} from '../../../Constants';
import {Displayer} from '../../../Utils';

const {setWidth, setHeight} = Displayer;

const HomeScreenService = ({navigation}) => {
  const dispatch = useDispatch();
  const SinOutBtn = async () => {
    dispatch(GeneralAction.setIsAppLoading(true));
    await GeneralStorage.setUser(false.toString()).then(() => {
      dispatch(GeneralAction.setUser(false));
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
        <CircleBtn>
          <SVG.Profile />
        </CircleBtn>
        <CircleBtn onPress={SinOutBtn}>
          <SVG.Logout />
        </CircleBtn>
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
  header: {flexDirection: 'row', padding: 20, justifyContent: 'space-between'},
});
