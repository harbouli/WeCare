import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigation';
import MainService from './MainService';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
export default () => {
  const {user: isUser} = useSelector(state => state.Auth);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isUser ? (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      ) : (
        <Stack.Screen name="Main" component={MainService} />
      )}
    </Stack.Navigator>
  );
};
