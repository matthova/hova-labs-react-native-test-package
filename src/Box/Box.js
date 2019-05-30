import styled from 'styled-components';
import styledNative from 'styled-components/native';

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
const BoxElement = (navigator && navigator.product === 'ReactNative') ? styledNative.View : styled.div;

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
