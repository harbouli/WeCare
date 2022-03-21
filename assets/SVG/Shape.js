import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Displayer} from '../../src/Utils';
const {setWidth, setHeight} = Displayer;

const SvgComponent = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={setWidth(100)}
    height={122.33}
    viewBox={`0 0 ${setWidth(100)} 122.33`}>
    <Path
      data-name="Intersection 2"
      d={`M255.313 81.9c-85.1-10.014-170.209 3.5-212.761 9.83L0 98.3V0h${setWidth(
        100,
      )}v122.33c-44.806-15.784-103.747-33.751-162.687-40.43Z`}
      fill="#227ce3"
    />
  </Svg>
);

export default SvgComponent;
