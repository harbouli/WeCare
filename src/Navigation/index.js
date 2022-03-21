import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';

import {SplashScreen, Welcome, NotConnectedScreen} from '../Screens/Other';
import AppNavigator from './AppNavigation';
import GeneralAction from '../Store/Actions/GeneralAction';

function Navigation() {
  const [isConnected, setIsConnected] = useState();
  const {isAppLoading, isFirstTimeUse} = useSelector(state => state.Auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    dispatch(GeneralAction.appStart());
  }, []);
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isConnected == false && (
          <Stack.Screen name="NoInternet" component={NotConnectedScreen} />
        )}
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
