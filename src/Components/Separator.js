import {View} from 'react-native';
import React from 'react';

const Separator = ({height, width, ...extraProps}) => {
  return <View style={{height, width, ...extraProps}} />;
};

export default Separator;
