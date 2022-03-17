import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigation';
import MainService from './MainService';
import MoreInfoNavigator from './MoreAcountInfoNavigation';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import GeneralStorage from '../Store/Storage/GeneralStorage';
import GeneralAction from '../Store/Actions/GeneralAction';
//
//
//
const Stack = createNativeStackNavigator();
export default () => {
  // Get State From Redux
  const {user: isUser} = useSelector(state => state.Auth);

  // Set State
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    // console.log(user);
  }

  // UseEffect Functions
  useEffect(() => {
    if (!isUser) {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      if (user) {
        GeneralStorage.setUser(true).then(() => {
          dispatch(GeneralAction.setUser(true));
        });
      }
      return subscriber;
    }
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isUser && user ? (
        <>
          <Stack.Screen name="Main" component={MainService} />
          <Stack.Screen name="MoreInfo" component={MoreInfoNavigator} />
        </>
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};
