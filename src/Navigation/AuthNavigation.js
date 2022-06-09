import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PhoneRegisterScreen, HomeScreen} from '../Screens/Auth';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PhoneAuth" component={PhoneRegisterScreen} />
    </Stack.Navigator>
  );
};
