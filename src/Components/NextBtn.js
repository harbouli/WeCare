import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Colors, Fonts, SVG, Lottie} from '../Constants';
import {Displayer} from '../Utils';
import LottieView from 'lottie-react-native';

const {setWidth} = Displayer;
const NextBtn = ({isLoading, children, onPress, disabled}) => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }
  return (
    <ButtonComponent disabled={disabled} activeOpacity={0.6} onPress={onPress}>
      <View
        style={[
          styles.Box,
          {opacity: disabled ? 0.7 : 1, paddingVertical: isLoading ? 0 : 20},
        ]}>
        {isLoading ? (
          <View style={[styles.Loading]}>
            <LottieView
              source={Lottie.DotsLoader}
              style={{width: 70, height: 70}}
              autoPlay
              loop
            />
          </View>
        ) : (
          <>
            <Text style={styles.Title}>{children}</Text>
            <View style={styles.Arrow}>
              <SVG.ArrowRight />
            </View>
          </>
        )}
      </View>
    </ButtonComponent>
  );
};

export default NextBtn;

const styles = StyleSheet.create({
  Box: {
    backgroundColor: Colors.Blue,
    width: setWidth(80),

    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',

    flexDirection: 'row',
  },
  Title: {
    fontFamily: Fonts.EC_Bold,
    fontSize: 18,
    color: '#fff',
  },
  Arrow: {
    left: setWidth(25),
  },
  Loading: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
