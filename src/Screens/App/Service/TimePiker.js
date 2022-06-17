import {StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native';
import React, {useState} from 'react';
import {NextBtn, ScreensTheme} from '../../../Components';
import {Colors, Fonts, SVG} from '../../../Constants';
import {Displayer} from '../../../Utils';
import DatePicker from 'react-native-date-picker';

const {setHeight, setWidth} = Displayer;
const TimePiker = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [Pick, setPick] = useState();

  return (
    <View style={{backgroundColor: Colors.Blue, flex: 1}}>
      <ScreensTheme Title={'Pick Time'} goBack={true}>
        <View style={styles.container}>
          <TouchableNativeFeedback onPress={() => setOpen(true)}>
            <View style={styles.box}>
              <SVG.Clock />
              <Text style={styles.text}>Pick Time</Text>
              {Pick && <Text style={styles.text}>{Pick}</Text>}
            </View>
          </TouchableNativeFeedback>
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
              setPick(date.toString());
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <NextBtn
            onPress={() => {
              if (Pick) {
                navigation.navigate('Information');
              }
            }}>
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
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 40,
    height: setHeight(60),
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: Colors.Light_Gray,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  text: {
    fontFamily: Fonts.EC_Bold,
    color: Colors.Dark_Gray,
    textAlign: 'center',
    marginTop: 15,
  },
});
