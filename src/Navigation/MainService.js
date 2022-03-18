import React, {useCallback, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';

import {HomeScreenService} from '../Screens/App/Service';
import {SplashScreen} from '../Screens/Other';
import {MoreInfoAcountScreen} from '../Screens/App/MoreAcountInfo';
import GeneralAction from '../Store/Actions/GeneralAction';

const Stack = createNativeStackNavigator();
export default () => {
  // Set Satat
  const [isAnonymous, setisAnonymous] = useState();

  // Redux Utils
  const dispatch = useDispatch();
  const [splash, setSplash] = useState(false);

  const CheckUser = useCallback(
    async () => await setisAnonymous(auth().currentUser.isAnonymous),
  );
  useEffect(() => {
    setSplash(true);
    CheckUser();
    setSplash(false);
  });
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {splash ? (
        <Stack.Screen name="splash" component={SplashScreen} />
      ) : setisAnonymous ? (
        <Stack.Screen name="Home" component={HomeScreenService} />
      ) : (
        <Stack.Screen name="AcountComplting" component={MoreInfoAcountScreen} />
      )}
    </Stack.Navigator>
  );
};
