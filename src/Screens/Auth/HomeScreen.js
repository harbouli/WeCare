import {
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {Link} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {Colors, Fonts, Images, SVG} from '../../Constants';
import {Displayer} from '../../Utils';
import BoxLogin from '../../Components/BoxsLogin';
import GeneralStorage from '../../Store/Storage/GeneralStorage';
import GeneralAction from '../../Store/Actions/GeneralAction';
const {setWidth} = Displayer;

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  // Sin IN Anonymously
  const Anonymously = () => {
    auth()
      .signInAnonymously()
      .then(async () => {
        console.log('User signed in anonymously');
        await GeneralStorage.setUser(true).then(() => {
          dispatch(GeneralAction.setUser(true));
        });
      })
      .catch(error => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }
        console.error(error);
      });
  };

  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor={Colors.Blue} barStyle="light-content" />
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={Images.HomeImage}>
        <View style={{justifyContent: 'space-between', flex: 1}}>
          {/* Logo */}
          <View style={styles.LogoContainer}>
            <SVG.Logo width={52.129} height={65.242} />
            <View style={{justifyContent: 'center'}}>
              <Text
                style={{
                  fontFamily: Fonts.EC_Bold,
                  color: '#fff',
                  fontSize: 50,
                  marginLeft: 10,
                }}>
                WeeCare
              </Text>
            </View>
          </View>
          {/* App Info */}
          <View style={styles.appInfo}>
            <Text style={styles.appTitle}>
              Book your at home lab appointment
            </Text>
            <Text style={styles.appDescription}>
              WeeCare draws your labs at home and delivers to your preferred
              laboratory.
            </Text>
          </View>
          {/* LoginBoxs */}
          <View style={styles.Boxs}>
            <BoxLogin
              title="with Phone Number"
              onPress={() => navigation.navigate('PhoneAuth')}>
              <SVG.Phone />
            </BoxLogin>
            {/* continuing As A Guest */}
            <Pressable
              style={{flexDirection: 'row', alignSelf: 'center'}}
              onPress={Anonymously}>
              <Text
                style={{
                  fontFamily: Fonts.EC_Medium,
                  color: '#fff',
                  fontSize: 18,
                }}>
                Continue as a guest
              </Text>
              <View style={{justifyContent: 'center', marginLeft: 10}}>
                <SVG.ArrowRight />
              </View>
            </Pressable>
          </View>

          <Text style={styles.TextTerms}>
            By continuing, you agree to{' '}
            <Link
              to="/PhonAuth"
              style={{
                textDecorationLine: 'underline',
                textDecorationStyle: 'solid',
              }}>
              our Terms
            </Link>{' '}
            , Conditions and Privacy Policy
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },

  Container: {flex: 1},
  LogoContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: setWidth(10),
  },
  Boxs: {alignItems: 'center'},
  TextTerms: {
    fontFamily: Fonts.EC_Medium,
    color: '#fff',
    width: setWidth(90),
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 15,
  },
  appInfo: {
    alignSelf: 'center',
    alignItems: 'center',
    width: setWidth(90),
  },
  appTitle: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: Fonts.EC_Bold,
    fontSize: 28,
    lineHeight: 28,
  },
  appDescription: {
    textAlign: 'center',
    fontFamily: Fonts.EC,
    color: '#fff',
    marginTop: 10,
    fontSize: 18,
  },
});
