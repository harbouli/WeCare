import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width={40}
    height={40}>
    <Path data-name="Path 720" d="M0 0h50v50H0Z" fill="none" />
    <Path
      data-name="Path 721"
      d="M25 12.5a4.167 4.167 0 1 1-4.167 4.166A4.179 4.179 0 0 1 25 12.499m0 20.833c5.625 0 12.083 2.688 12.5 4.167h-25c.479-1.5 6.9-4.167 12.5-4.167m0-25a8.333 8.333 0 1 0 8.333 8.334A8.331 8.331 0 0 0 25 8.333Zm0 20.833c-5.567.001-16.667 2.793-16.667 8.335v4.167h33.333V37.5c0-5.542-11.104-8.334-16.666-8.334Z"
      fill="#3f3f3f"
    />
  </Svg>
);

export default SvgComponent;
