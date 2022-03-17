import {StyleSheet, Dimensions, View} from 'react-native';
import React, {forwardRef, useCallback, useImperativeHandle} from 'react';
import {Displayer} from '../Utils';
import {Colors} from '../Constants';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 70;

const {setWidth, setHeight} = Displayer;

const BottomSheet = forwardRef(({children}, ref) => {
  const transitionY = useSharedValue(0);
  const context = useSharedValue({y: 0});
  const active = useSharedValue(false);

  const scrollTo = useCallback(destination => {
    'worklet';
    active.value = destination !== 0;

    transitionY.value = withSpring(destination, {damping: 20});
  }, []);
  const isActive = useCallback(() => {
    return active.value;
  }, []);

  useImperativeHandle(ref, () => ({scrollTo, isActive}), [scrollTo, isActive]);

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {y: transitionY.value};
    })
    .onUpdate(event => {
      // console.log(event.translationY);
      transitionY.value = event.translationY + context.value.y;
      transitionY.value = Math.max(transitionY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (transitionY.value > -SCREEN_HEIGHT / 1.5) {
        scrollTo(0);
      } else if (transitionY.value < -SCREEN_HEIGHT / 2) {
        scrollTo(MAX_TRANSLATE_Y);
      }
    });
  const rOpacity = useAnimatedStyle(() => {
    const opacity = interpolate(
      transitionY.value,
      [0, MAX_TRANSLATE_Y],
      [0, 0.8],
      Extrapolate.CLAMP,
    );
    return {opacity};
  });
  const rBottomStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: transitionY.value}],
    };
  });
  return (
    <>
      <Animated.View pointerEvents="none" style={[styles.backBody, rOpacity]} />

      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.bottomSheetContainer, rBottomStyle]}>
          <View style={styles.line} />
          {children}
        </Animated.View>
      </GestureDetector>
    </>
  );
});

export default BottomSheet;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    position: 'absolute',
    height: setHeight(100),
    width: setWidth(100),
    backgroundColor: '#fff',
    top: setHeight(100),
    borderRadius: 25,
  },
  line: {
    width: setWidth(25),
    height: 4,
    backgroundColor: Colors.Dark_Gray,
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
  backBody: {
    position: 'absolute',
    width: setWidth(100),
    height: setHeight(100),
    backgroundColor: '#000',
  },
});
