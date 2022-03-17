import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MoreInfoAcountScreen} from '../Screens/App/MoreAcountInfo/';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
export default () => {
  const {user: isUser} = useSelector(state => state.Auth);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={MoreInfoAcountScreen} />
    </Stack.Navigator>
  );
};
