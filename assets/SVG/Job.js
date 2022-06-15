import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={32}
    height={32}>
    <Path data-name="Path 1137" d="M0 0h32.062v32.062H0Z" />
    <Path
      data-name="Path 1138"
      fill="#000"
      d="M18.703 8.016V5.344h-5.344v2.672ZM5.344 10.687v14.695h21.374V10.687Zm21.374-2.671a2.663 2.663 0 0 1 2.672 2.672v14.694a2.663 2.663 0 0 1-2.672 2.672H5.344a2.663 2.663 0 0 1-2.672-2.672l.013-14.695a2.651 2.651 0 0 1 2.659-2.671h5.344V5.344a2.663 2.663 0 0 1 2.671-2.672h5.344a2.663 2.663 0 0 1 2.669 2.672v2.672Z"
    />
  </Svg>
);

export default SvgComponent;
