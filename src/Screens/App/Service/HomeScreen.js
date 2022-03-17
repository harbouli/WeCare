import {
  StatusBar,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Circle from '../../Components/CircleBtn';
import GeneralStorage from '../../Store/Storage/GeneralStorage';
import GeneralAction from '../../Store/Actions/GeneralAction';
import {SplashScreen} from '../Auth';
import {Colors, Fonts, Images, SVG} from '../../Constants';
import {Displayer} from '../../Utils';
import BottomSheet from '../../Components/BottomSheet';

const {setWidth, setHeight} = Displayer;
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 70;

const HomeScreen = () => {
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    // console.log(user);
    if (!user) {
      GeneralStorage.setUser(false).then(() => {
        dispatch(GeneralAction.setUser(false));
      });
    }
  }
  const SinOutBtn = () => {
    GeneralStorage.setUser(false).then(() => {
      dispatch(GeneralAction.setUser(false));
      auth()
        .signOut()
        .then(() => console.log('SingOut'));
    });
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber; // unsubscribe on unmount
  }, []);

  const ref = useRef(null);

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(MAX_TRANSLATE_Y);
    }
  }, []);

  return !user ? (
    <SplashScreen />
  ) : (
    <GestureHandlerRootView style={styles.screen}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      {/* Header  */}
      <View style={styles.header}>
        <Circle>
          <SVG.Profile />
        </Circle>
        <Circle onPress={SinOutBtn}>
          <SVG.Logout />
        </Circle>
      </View>
      {/* About Us   */}
      <View style={styles.aboutUs}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: Fonts.EC_Bold,
            color: Colors.Dark_Gray,
            textAlign: 'center',
            width: setWidth(80),
          }}>
          Book your at home lab appointment
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontSize: 16,
            fontFamily: Fonts.EC,
            color: Colors.Gray,
            textAlign: 'center',
            width: setWidth(80),
          }}>
          WeeCare draws your labs at home and delivers to your preferred
          laboratory.
        </Text>
      </View>

      {/* Booking Lab Test Service Section  */}
      <View style={styles.bookingLabTest}>
        {/* Home Adrees Button */}
        <TouchableOpacity activeOpacity={0.7} style={styles.setHomeAdressStyle}>
          <Text style={styles.setHomeTextStyle}>Home Address</Text>
        </TouchableOpacity>
        <View style={styles.Line} />
        {/* Clock Button  */}
        <TouchableOpacity style={styles.setTimeStyle} activeOpacity={0.7}>
          <View style={styles.setTimeBox}>
            <SVG.Clock />
            <Text style={styles.TextSetTime}>Now</Text>
            <SVG.ArrowBlack />
          </View>
        </TouchableOpacity>
      </View>
      {/* Save Palces  */}
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={styles.SavePlaceHolder}>
        <View style={styles.CircleStar}>
          <SVG.Star />
        </View>
        <Text style={styles.SavePlaceText}>Choose a saved place</Text>
        <SVG.ArrowRightBlack />
      </TouchableOpacity>
      <BottomSheet ref={ref}>
        <Text>Mohamed</Text>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {flexDirection: 'row', padding: 20, justifyContent: 'space-between'},
  aboutUs: {
    marginVertical: 10,
    alignItems: 'center',
  },
  AroundYou: {
    width: setWidth(80),
    alignSelf: 'center',
  },
  map: {
    width: setWidth(80),
    height: setWidth(40),
  },
  mapHolder: {
    marginTop: 10,
    width: setWidth(80),
    height: setWidth(40),
    overflow: 'hidden',
    borderRadius: 10,
  },
  bookingLabTest: {
    flexDirection: 'row',
    backgroundColor: '#EFEFEF',
    width: setWidth(80),
    alignSelf: 'center',
    marginTop: 20,
    height: 75,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  setHomeAdressStyle: {
    width: '60%',
  },
  setHomeTextStyle: {
    color: '#000',
    fontSize: 20,
    fontFamily: Fonts.EC_Medium,
  },
  Line: {
    backgroundColor: Colors.Default_Gray,
    height: '80%',
    width: 2,
  },
  setTimeStyle: {
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '47%',
    height: '100%',
  },
  setTimeBox: {
    flexDirection: 'row',
    paddingHorizontal: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 20,
    width: '70%',
  },
  TextSetTime: {
    color: '#000',
    fontFamily: Fonts.EC_Bold,
  },
  SavePlaceHolder: {
    alignItems: 'center',
    width: setWidth(80),
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 10,
  },
  CircleStar: {
    backgroundColor: Colors.Light_Gray,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SavePlaceText: {
    color: '#000',
    fontFamily: Fonts.EC_Medium,
    fontSize: 16,
  },
});
