import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';

import {SplashScreen, Welcome} from '../Screens/Other';
import AppNavigator from './AppNavigation';
import GeneralAction from '../Store/Actions/GeneralAction';

function Navigation() {
  const {isAppLoading, isFirstTimeUse} = useSelector(state => state.Auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GeneralAction.appStart());
  }, []);
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAppLoading ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : isFirstTimeUse ? (
          <Stack.Screen name="Welcome" component={Welcome} />
        ) : (
          <Stack.Screen name="App" component={AppNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
