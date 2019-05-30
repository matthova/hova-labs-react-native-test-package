import styled from 'styled-components';
import { View } from 'react-native';

import {
  space,
  color,
  width,
  height,
  flex,
  order,
  alignSelf,
  borders,
  borderColor,
  borderRadius
} from "styled-system";
const BoxElement = (navigator && navigator.product === 'ReactNative') ? styled(View) : styled.div;

export const Box = BoxElement`
  ${space}
  ${color}
  ${width}
  ${height}
  ${flex}
  ${order}
  ${alignSelf}
  ${borders}
  ${borderColor}
  ${borderRadius}
`;
