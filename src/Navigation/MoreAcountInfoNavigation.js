import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MoreInfoAcountScreen} from '../Screens/App/MoreAcountInfo/';

const Stack = createNativeStackNavigator();
export default () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={MoreInfoAcountScreen} />
    </Stack.Navigator>
  );
};
