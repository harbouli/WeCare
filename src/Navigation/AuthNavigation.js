import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PhoneRegisterScreen, HomeScreen} from '../Screens/Auth';
import {useSelector} from 'react-redux';
const Stack = createNativeStackNavigator();
export default () => {
  const {isFirstTimeUse} = useSelector(state => state.Auth);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PhoneAuth" component={PhoneRegisterScreen} />
    </Stack.Navigator>
  );
};
