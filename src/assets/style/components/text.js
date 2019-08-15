import React from 'react';
import styled from 'styled-components/native';
import { colors, fontSize } from '../baseStyle';

const ErrMsg = styled.Text`
  color: ${colors.err};
  font-size: ${fontSize.m};
  text-align: center;
  margin: 10px 20px;
  font-weight: bold;
`;

const SuccessMsg = styled(ErrMsg)`
  color: ${colors.suces};
`;
export { ErrMsg, SuccessMsg };
