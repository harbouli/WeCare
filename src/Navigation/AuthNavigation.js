import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PhoneRegisterScreen, HomeScreen} from '../Screens/Auth';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

export default () => {
  // const [user, setUser] = useState();
  // function onAuthStateChanged(Info) {
  //   setUser(Info);
  //   console.log(user);
  // }
  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  // });
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PhoneAuth" component={PhoneRegisterScreen} />
    </Stack.Navigator>
  );
};
