import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    fill="#000"
    height={30}
    width={30}>
    <Path d="m15.2 43.9-2.8-2.85L29.55 23.9 12.4 6.75l2.8-2.85 20 20Z" />
  </Svg>
);

export default SvgComponent;
