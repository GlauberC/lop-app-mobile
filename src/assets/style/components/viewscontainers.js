import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../baseStyle';

const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;
const ScrollContainer = styled.ScrollView`
  flex: 8;
  background-color: ${colors.sec};
`;
export { Container, ScrollContainer };
