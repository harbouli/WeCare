import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import auth from '@react-native-firebase/auth';
import {SplashScreen, Welcome, NotConnectedScreen} from '../Screens/Other';
import AppNavigator from './AppNavigation';
import GeneralAction from '../Store/Actions/GeneralAction';
import UserAction from '../Store/Actions/UserAction';

function Navigation() {
  // States
  const [isConnected, setIsConnected] = useState();
  const [user, setUser] = useState({});

  // Fetsh Data From Reducer
  const {isAppLoading, isFirstTimeUse} = useSelector(state => state.Auth);
  const dispatch = useDispatch();

  // On App Load
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    //GetUser
    const isAuth = auth().currentUser;
    if (isAuth && !isAuth.isAnonymous) {
      firestore()
        .collection('users')
        .doc(isAuth.uid)
        .get()
        .then(userData => {
          setUser(userData._data);
          // console.log(userData);
        })
        .catch(error => {
          console.error(error);
        });
    }
    setTimeout(() => {
      dispatch(GeneralAction.appStart());
    }, 3000);
  }, []);

  // If User Exist
  useEffect(() => {
    dispatch(
      UserAction.adduser({
        firstname: user?.firstname,
        lastname: user?.lastname,
        gender: user?.gender,
        age: user?.age,
        complete: user?.confirm,
      }),
    );
  }, [user]);
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isConnected == false && (
          <Stack.Screen name="NoInternet" component={NotConnectedScreen} />
        )}
        {isAppLoading ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : isFirstTimeUse ? (
          <Stack.Screen name="Welcome" component={Welcome} />
        ) : (
          <Stack.Screen name="App" component={AppNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
