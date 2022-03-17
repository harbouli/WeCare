import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreenService} from '../Screens/App/Service';

const Stack = createNativeStackNavigator();
export default () => {
  return (
    <Stack.Navigator
      initialRouteName="MoreInfoAcount"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreenService} />
    </Stack.Navigator>
  );
};
