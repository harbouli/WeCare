import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NextBtn, ScreensTheme} from '../../../Components';
import {Colors} from '../../../Constants';
import {Displayer} from '../../../Utils';
import DatePicker from 'react-native-date-picker';

const {setHeight, setWidth} = Displayer;
const TimePiker = () => {
  return (
    <View style={{backgroundColor: Colors.Blue, flex: 1}}>
      <ScreensTheme Title={'Pick Time'} goBack={true}>
        <View style={styles.container}>
          <Button title="Open" onPress={() => setOpen(true)} />
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <NextBtn onPress={() => navigation.navigate('TimePiker')}>
            Next
          </NextBtn>
        </View>
      </ScreensTheme>
    </View>
  );
};

export default TimePiker;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: setHeight(82),
  },
});
