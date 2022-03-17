import {
  Image,
  Keyboard,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors, Fonts, Images, SVG} from '../../Constants';
import {Displayer} from '../../Utils';
import NextBtn from '../../Components/NextBtn';
import auth from '@react-native-firebase/auth';
import OtpScreen from './OtpScreen';

const headerSize = 20;
const {setWidth, setHeight} = Displayer;

const PhoneRegisterScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    setIsLoading(true);
    const confirmation = await auth()
      .signInWithPhoneNumber(phoneNumber)
      .catch(err => {
        console.log(err);
      });
    setIsLoading(false);
    setConfirm(confirmation);
  }

  const [isValid, setIsValid] = useState(true);
  const [enterdValue, setEnterdValue] = useState('');
  const inputNumbersHandler = inputValue => {
    setEnterdValue(inputValue.replace(/[^0-9]/g, ''));
    if (inputValue.length == 9) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  const [isKeyboard, setisKeyboard] = useState(true);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setisKeyboard(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setisKeyboard(false); // or some other action
      },
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return !confirm ? (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.Container}>
        <StatusBar backgroundColor={Colors.Blue} barStyle="light-content" />

        {/* Header  */}
        <View style={styles.backHeader} />
        <View style={styles.header}>
          <SVG.Logo width={52.129} height={65.242} />
          <Text style={styles.WeeCare}>WeeCare</Text>
        </View>

        {/* Body  */}
        <View style={styles.backBody} />
        <View style={styles.Body}>
          {/* Sologan */}
          <Text style={styles.Slogan}>Votre Confiance Nous Engage!</Text>

          {/* AuthContainer */}
          <View
            style={[
              styles.AuthContainer,
              {justifyContent: isKeyboard ? 'flex-start' : 'space-between'},
            ]}>
            {/* Phone Input  */}
            <View style={styles.PhneInputHolders}>
              <Image source={Images.Morocco} style={styles.Morocco} />
              <Text style={styles.textNationalNumber}>+212</Text>
              {/* Input  */}
              <TextInput
                placeholder="Phone number"
                style={styles.textPhone}
                keyboardType="number-pad"
                autoCorrect={false}
                maxLength={9}
                autoFocus={true}
                onChangeText={inputNumbersHandler}
                value={enterdValue}
              />
            </View>

            {/* Button */}

            <NextBtn
              isLoading={isLoading}
              disabled={isValid}
              onPress={() => {
                signInWithPhoneNumber(`+212${enterdValue}`);
              }}>
              NEXT
            </NextBtn>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  ) : (
    <OtpScreen confirm={confirm} />
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: setWidth(100),
    height: setHeight(headerSize),
    backgroundColor: Colors.Blue,
    zIndex: 3, // works on ios
    borderBottomRightRadius: setWidth(20),
    alignItems: 'center',
    paddingTop: 20,
  },
  backHeader: {
    position: 'absolute',
    width: setWidth(100),
    height: setHeight(headerSize),
    backgroundColor: '#fff',
  },
  Body: {
    width: setWidth(100),
    height: setHeight(75),
    backgroundColor: '#fff',
    zIndex: 1, // works on ios
    borderTopLeftRadius: setWidth(20),
    alignItems: 'center',
    paddingTop: 20,

    position: 'relative',
  },
  backBody: {
    position: 'absolute',
    width: setWidth(100),
    height: setHeight(25),
    backgroundColor: Colors.Blue,
    alignItems: 'center',
    top: setHeight(headerSize),
  },
  WeeCare: {
    fontFamily: Fonts.EC_Bold,
    fontSize: 32,
    color: '#fff',
  },
  Slogan: {
    width: setWidth(80),
    textAlign: 'center',
    fontFamily: Fonts.EC_Bold,
    fontSize: 24,
    marginTop: 10,
    color: Colors.Dark_Gray,
  },
  PhneInputHolders: {
    flexDirection: 'row',
    borderColor: Colors.Default_Gray,
    borderWidth: 2,
    width: setWidth(80),
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  Morocco: {
    width: 40,
    height: 30,
    borderRadius: 5,
  },
  textNationalNumber: {
    fontFamily: Fonts.EC_Medium,
    color: Colors.Dark_Gray,
    fontSize: 16,
    marginHorizontal: 10,
  },
  textPhone: {
    fontFamily: Fonts.EC_Medium,
    color: Colors.Dark_Gray,
    width: 200,
  },
  AuthContainer: {
    flex: 0.8,
    marginVertical: 20,
  },
});

export default PhoneRegisterScreen;
