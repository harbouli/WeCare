import * as React from 'react';
import Svg, {G, Circle, Path} from 'react-native-svg';

const SvgComponent = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    viewBox="0 0 23.339 23.515">
    <G transform="translate(-.744 -.927)">
      <Circle
        data-name="Ellipse 79"
        cx={11.075}
        cy={11.075}
        r={11.075}
        transform="translate(1.584 1.622)"
        fill="#000"
      />
      <Path
        data-name="Path 708"
        d="M12.402.927a11.758 11.758 0 1 0 11.681 11.758A11.708 11.708 0 0 0 12.402.927Zm.012 21.164a9.406 9.406 0 1 1 9.33-9.406 9.368 9.368 0 0 1-9.331 9.406Zm.583-15.285h-1.753v7.055l6.126 3.7.875-1.446-5.251-3.139Z"
        fill="#fff"
      />
    </G>
  </Svg>
);

export default SvgComponent;
