import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Welcom} from '../../Data';
import React, {useRef, useState} from 'react';
import {WelcomCard, Separator} from '../../Components';

import {Colors, Fonts} from '../../Constants';
import {Displayer} from '../../Utils';
import Btn from '../../Components/Btn';
import {useDispatch} from 'react-redux';
import GeneralAction from '../../Store/Actions/GeneralAction';
import GeneralStorage from '../../Store/Storage/GeneralStorage';

const {setWidth, setHeight} = Displayer;

const isActive = isActive =>
  isActive
    ? styles.page
    : {...styles.page, backgroundColor: Colors.Default_Gray, width: 10};

const Pagination = ({index}) => {
  return (
    <View style={styles.pageContainer}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      {[...Array(Welcom.Welcom_Content.length).keys()].map((_, i) =>
        i === index ? (
          <View key={i} style={isActive(true)} />
        ) : (
          <View key={i} style={isActive(false)} />
        ),
      )}
    </View>
  );
};

const WelcomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [welcomeListIndex, setWelcomeListIndex] = useState(0);
  const welcomeList = useRef();
  const onViewRef = useRef(({changed}) => {
    setWelcomeListIndex(changed[0].index);
  });
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  const pageScroll = () => {
    welcomeList.current.scrollToIndex({
      index: welcomeListIndex < 2 ? welcomeListIndex + 1 : welcomeListIndex,
    });
  };
  return (
    // Scrroling Welcome Page
    <View style={styles.Container}>
      <Separator height={StatusBar.currentHeight} />
      {/* FlatList  */}
      <View style={styles.WelcomListContainer}>
        <FlatList
          ref={welcomeList}
          data={Welcom.Welcom_Content}
          keyExtractor={item => item.title}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          // overScrollMode="never"
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewRef.current}
          renderItem={({item}) => <WelcomCard {...item} />}
        />
      </View>
      <Separator height={setHeight(2)} />
      {/* Pagination View  */}
      <Pagination index={welcomeListIndex} />
      <Separator height={setHeight(7)} />
      {/* Next Skip button */}
      {welcomeListIndex === 2 ? (
        <Btn
          onPress={() => {
            // ! navigation.navigate('Splash');
            GeneralStorage.setFirstTimeUse().then(() => {
              dispatch(GeneralAction.setIsFirstTimeUse());
            });
          }}>
          Get Started
        </Btn>
      ) : (
        <View style={styles.ButtonContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{paddingVertical: 16}}
            onPress={() => welcomeList.current.scrollToEnd()}>
            <Text style={styles.ButtonText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => pageScroll()}
            style={{
              backgroundColor: Colors.Light_Blue,
              height: 80,
              width: 80,
              alignItems: 'center',
              justifyContent: 'center',
              top: -10,
              borderRadius: 40,
            }}>
            <Text style={styles.ButtonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  Container: {flex: 1, backgroundColor: '#fff'},
  pageContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  WelcomListContainer: {
    height: setHeight(60),
  },
  page: {
    height: 10,
    width: 16,
    borderRadius: 8,
    backgroundColor: Colors.Blue,
    marginHorizontal: 5,
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: setWidth(90),
    alignSelf: 'center',
  },
  ButtonText: {
    fontFamily: Fonts.EC_Bold,
    color: Colors.Dark_Gray,
    fontSize: 16,
    lineHeight: 16 * 1.4,
  },
});
