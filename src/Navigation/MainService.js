import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';

import {HomeScreenService} from '../Screens/App/Service';
import {SplashScreen} from '../Screens/Other';
import {
  MoreInfoAcountScreen,
  GenderScreen,
  AgeScreen,
  WeeCareWelcomeScreen,
} from '../Screens/App/MoreAcountInfo';
import UserAction from '../Store/Actions/UserAction';
import GeneralStorage from '../Store/Storage/GeneralStorage';
import ProfileScreen from '../Screens/App/Service/Profile';

const Stack = createNativeStackNavigator();
export default () => {
  const {user} = useSelector(state => state.User);
  const {firstname, lastname, age, gender, complete} = user;

  // Set Satat
  const [isAnonymous, setisAnonymous] = useState();

  // Redux Utils
  const dispatch = useDispatch();

  const Checker = async () => {
    const Sub = await auth().currentUser;

    GeneralStorage.getUID().then(uid => {
      dispatch(UserAction.addUID(uid));
    });
    if (Sub) {
      setisAnonymous(Sub.isAnonymous);
    }
  };

  useEffect(() => {
    Checker();
    return;
  }, []);
  const Condition =
    isAnonymous || (firstname && lastname && age && gender && complete);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {Condition ? (
        <>
          <Stack.Screen name="Home" component={HomeScreenService} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        </>
      ) : isAnonymous == false ? (
        <>
          <Stack.Screen
            name="AcountComplting"
            component={MoreInfoAcountScreen}
          />
          <Stack.Screen name="Gender" component={GenderScreen} />
          <Stack.Screen name="Age" component={AgeScreen} />
          <Stack.Screen name="WeeCareStart" component={WeeCareWelcomeScreen} />
        </>
      ) : (
        <Stack.Screen name="splash" component={SplashScreen} />
      )}
    </Stack.Navigator>
  );
};
