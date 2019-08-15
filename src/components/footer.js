import React from 'react';
import { Linking } from 'react-native';

import { colors, fontSize } from '../assets/style/baseStyle';
import styled from 'styled-components/native';
import Ionicon from 'react-native-vector-icons/Ionicons';

export default () => (
  <FooterView>
    <FooterText>
      Plataforma open-source de gerenciamento de exercícios de programação
    </FooterText>
    <Logo
      onPress={() => Linking.openURL('https://github.com/GlauberC/lop-mobile')}
    >
      <Ionicon name="logo-github" size={64} color={colors.sec} />
    </Logo>
  </FooterView>
);

const FooterView = styled.View`
  flex: 3;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.tert2};
  padding: 20px 30px 40px 30px;
`;
const FooterText = styled.Text`
  color: ${colors.sec};
  font-size: ${fontSize.m};
  flex: 3;
`;

const Logo = styled.Text`
  flex: 1;
`;
