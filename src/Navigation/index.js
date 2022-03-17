import React, {useEffect, useState} from 'react';
// import auth from '@react-native-firebase/auth';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

// import Service from './MainService';
import GeneralAction from '../Store/Actions/GeneralAction';
import {Splash, Welcome} from '../Screens/Other';
import GeneralStorage from '../Store/Storage/GeneralStorage';
import NetInfo from '@react-native-community/netinfo';

import NotConnectedScreen from '../Screens/Other/NotConnectedScreen';
import AppNavigation from './AppNavigation';

function Navigation() {
  const {isFirstTimeUse, user: isUser} = useSelector(state => state.Auth);
  const dispatch = useDispatch();

  const [isConnected, setIsConnected] = useState();

  const [splash, setSplash] = useState(true);

  useEffect(() => {
    dispatch(GeneralAction.appStart());
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    setTimeout(() => {
      setSplash(false);
    }, 5000);
    return isConnected;
  }, []);
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {splash ? (
          <Stack.Screen name="Splash" component={Splash} />
        ) : (
          isFirstTimeUse && (
            <Stack.Screen name="NewUserWelcome" component={Welcome} />
          )
        )}
        {isConnected ? (
          <Stack.Screen name="App" component={AppNavigation} />
        ) : (
          <Stack.Screen name="isConnected" component={NotConnectedScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
