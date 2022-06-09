import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SVG} from '../../../../Constants';
import Header from './Components/Header';
import Input from './Components/Input';
import {Btn} from '../../../../Components';
import {useSelector} from 'react-redux';

const Profile = ({navigation}) => {
  const {user} = useSelector(state => state.User);

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Input
          placeholder="First Name"
          value={user.firstName}
          Icone={<SVG.Profile />}
        />
        <Input
          placeholder="Last Name"
          value={user.lastName}
          Icone={<SVG.Profile />}
        />
        <Input placeholder="Email" Icone={<SVG.Email />} />
        <Input placeholder="Phone Number" Icone={<SVG.Phonee />} />

        <Btn onPress={() => navigation.goBack()}>Change</Btn>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
});
