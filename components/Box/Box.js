import styled from 'styled-components';

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

export function createBox(StyledElement) {
  return StyledElement`
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
}

export const Box = createBox(styled.div);
