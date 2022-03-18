import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigation';
import MainService from './MainService';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import GeneralStorage from '../Store/Storage/GeneralStorage';
import GeneralAction from '../Store/Actions/GeneralAction';
import UserAction from '../Store/Actions/UserAction';
//
//
//
const Stack = createNativeStackNavigator();
export default () => {
  const {user} = useSelector(state => state.Auth);
  console.log(user);
  useEffect(() => {});

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
