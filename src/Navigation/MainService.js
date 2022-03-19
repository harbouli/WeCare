import React, {useCallback, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';

import {HomeScreenService} from '../Screens/App/Service';
import {SplashScreen} from '../Screens/Other';
import {MoreInfoAcountScreen} from '../Screens/App/MoreAcountInfo';
import UserAction from '../Store/Actions/UserAction';
import GeneralStorage from '../Store/Storage/GeneralStorage';

const Stack = createNativeStackNavigator();
export default () => {
  // Set Satat
  const [isAnonymous, setisAnonymous] = useState();
  const [UID, setUID] = useState();

  // Redux Utils
  const dispatch = useDispatch();
  const {UID: uidS} = useSelector(state => state.User);

  const Checker = async () => {
    const Sub = await auth().currentUser;
    if (Sub) {
      setUID(Sub.uid);
      setisAnonymous(Sub.isAnonymous);
      dispatch(UserAction.addUID(UID));
      console.log(uidS);
    }
  };

  useEffect(() => {
    Checker();
  }, []);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAnonymous ? (
        <Stack.Screen name="Home" component={HomeScreenService} />
      ) : isAnonymous == false ? (
        <Stack.Screen name="AcountComplting" component={MoreInfoAcountScreen} />
      ) : (
        <Stack.Screen name="splash" component={SplashScreen} />
      )}
    </Stack.Navigator>
  );
};
