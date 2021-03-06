import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigation';
import MainService from './MainService';
import {useSelector} from 'react-redux';
//
//
//
const Stack = createNativeStackNavigator();
export default () => {
  const {user} = useSelector(state => state.Auth);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!user ? (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      ) : (
        <Stack.Screen name="MainService" component={MainService} />
      )}
    </Stack.Navigator>
  );
};
