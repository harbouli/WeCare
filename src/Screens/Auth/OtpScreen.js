import {
  Keyboard,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors, Fonts} from '../../Constants';
import {Displayer} from '../../Utils';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import RNOtpVerify from 'react-native-otp-verify';
import auth from '@react-native-firebase/auth';
import GeneralStorage from '../../Store/Storage/GeneralStorage';
import GeneralAction from '../../Store/Actions/GeneralAction';
import {useDispatch} from 'react-redux';

const {setWidth, setHeight} = Displayer;
const OtpScreen = ({confirm}) => {
  const [code, setCode] = useState();
  // OTP AUTO DETECT
  useEffect(() => {
    RNOtpVerify.getHash().then(console.log).catch(console.log);
    RNOtpVerify.getOtp()
      .then(p => {
        RNOtpVerify.addListener(otpHandler);
      })

      .catch(p => console.log(p));

    return () => RNOtpVerify.removeListener();
  }, []);
  const otpHandler = message => {
    const otp = /(\d{6})/g.exec(message)[1];
    setCode(otp);
    RNOtpVerify.removeListener();
    Keyboard.dismiss();
  };
  const dispatch = useDispatch();

  const [user, setUser] = useState();
  async function confirmCode(OTP) {
    try {
      const credential = await auth.PhoneAuthProvider.credential(
        confirm.verificationId,
        OTP,
      );
      console.log(credential);
      let userData = await auth()
        .signInWithCredential(credential)
        .then(user => {
          setUser(userData);
          console.log(user);
          GeneralStorage.setUser(true).then(() => {
            dispatch(GeneralAction.setUser(true));
          });
        });
    } catch (error) {
      if (error.code == 'auth/invalid-verification-code') {
        console.log('Invalid code.');
      } else {
        console.log(error);
      }
    }
  }
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.OtpHolder}>
            <Text style={styles.Title}>Confirm OTP</Text>
            <Text style={styles.paragraph}>
              Enter OTP we just sent to your phone number.
            </Text>
            <OTPInputView
              code={code}
              codeInputFieldStyle={{
                backgroundColor: '#fff',

                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,

                elevation: 7,
                color: Colors.Dark_Gray,
                fontFamily: Fonts.EC_Bold,
                fontSize: 18,
              }}
              onCodeChanged={value => value.replace(/[^0-9]/g, '')}
              autoFocusOnLoad
              onCodeFilled={codeOTP => {
                console.log(`Code is ${codeOTP}, you are good to go!`);
                confirmCode(codeOTP);
              }}
              codeInputHighlightStyle={{
                color: Colors.Blue,
                borderWidth: 2,
                borderColor: Colors.Blue,
                borderRadius: 10,
              }}
              pinCount={6}
              style={{width: '80%', height: 100}}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Blue,
  },
  OtpHolder: {
    height: setHeight(75),
    width: setWidth(100),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: setWidth(15),
    borderBottomRightRadius: setWidth(15),
  },
  Title: {
    fontSize: 24,
    fontFamily: Fonts.EC_Bold,
    color: '#000',
  },
  paragraph: {
    fontFamily: Fonts.EC_Medium,
    color: '#000',
    fontSize: 18,
    width: setWidth(80),
    textAlign: 'center',
    marginVertical: 20,
  },
});
