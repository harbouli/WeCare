import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthCompleting from '../Screens/App/MoreAcountInfo/';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
export default () => {
  const {user: isUser} = useSelector(state => state.Auth);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={AuthCompleting} />
    </Stack.Navigator>
  );
};
