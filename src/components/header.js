import React from 'react';
import styled from 'styled-components/native';
import { colors, fontSize } from '../assets/style/baseStyle';
import { Linking } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

export default class Header extends React.Component {
  render() {
    return (
      <HeaderView>
        <NomeText>
          <LopText>LoP</LopText>
          <VersaoText>MobileAlpha</VersaoText>
        </NomeText>
        <Logo
          onPress={() =>
            Linking.openURL('https://github.com/GlauberC/lop-mobile')
          }
        >
          <Ionicon name="logo-github" size={32} color={colors.sec} />
        </Logo>
      </HeaderView>
    );
  }
}

const HeaderView = styled.View`
  flex: 1;
  align-items: flex-end;
  background-color: ${colors.prim2};
  padding: 0px 20px 20px 20px;
  flex-direction: row;
  justify-content: space-around;
`;
const MenuView = styled.View`
  flex: 1;
`;

const NomeText = styled.Text`
  flex: 4;
  color: ${colors.sec};
  text-align: center;
`;

const LopText = styled.Text`
  font-size: ${fontSize.b};
`;
const VersaoText = styled.Text`
  font-size: ${fontSize.s};
`;
const Logo = styled.Text`
  flex: 1;
`;
