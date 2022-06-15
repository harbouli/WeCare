import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height={35}
    width={35}
    viewBox="0 0 48 48"
    fill="#000">
    <Path d="M8 42V18L24.1 6 40 18v24H28.3V27.75h-8.65V42Zm3-3h5.65V24.75H31.3V39H37V19.5L24.1 9.75 11 19.5Zm13-14.65Z" />
  </Svg>
);

export default SvgComponent;
