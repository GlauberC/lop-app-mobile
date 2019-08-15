import React, { Component } from 'react';

import { View, Text, StyleSheet, Linking } from 'react-native';
import { colors, fontSize } from '../assets/style/baseStyle';
import logo from '../assets/img/ect-logo.png';
import styled from 'styled-components/native';
import Ionicon from 'react-native-vector-icons/Ionicons';

import { Container } from '../assets//style/components/viewscontainers';
import {
  ButtonContainer,
  ButtonLabel
} from '../assets/style/components/buttons';
import { shadowStyle } from '../assets/style/effects/shadow';

export default class screens extends Component {
  handleEntrar = () => {
    this.props.navigation.navigate('Login');
  };
  handleCadastro = () => {
    this.props.navigation.navigate('Cadastro');
  };

  render() {
    return (
      <Container>
        <Presentation style={shadowStyle.shadow}>
          <LogoImg source={logo} />
          <NameText>
            <LopText> &#x0007B; LOP &#x0007D;</LopText>{' '}
            <VersionText>MobileAlpha</VersionText>
          </NameText>
        </Presentation>
        <InfoView>
          <InfoText>
            Plataforma open-source de gerenciamento de exercícios de programação
          </InfoText>
          <LogoGit
            onPress={() =>
              Linking.openURL('https://github.com/GlauberC/lop-mobile')
            }
          >
            <Ionicon
              name="logo-github"
              size={64}
              color={colors.prim}
              style={shadowStyle.shadow}
            />
          </LogoGit>
        </InfoView>
        <ButtonsContainer>
          <ButtonContainer
            style={shadowStyle.shadow}
            onPress={this.handleCadastro}
          >
            <ButtonLabel>Cadastro</ButtonLabel>
          </ButtonContainer>
          <ButtonContainer
            style={shadowStyle.shadow}
            onPress={this.handleEntrar}
          >
            <ButtonLabel>Entrar</ButtonLabel>
          </ButtonContainer>
        </ButtonsContainer>
      </Container>
    );
  }
}

const Presentation = styled.View`
  flex: 7;
  background: ${colors.prim};
  justify-content: center;
  align-items: center;
`;
const LogoImg = styled.Image`
  width: 220px;
  height: 88px;
`;
const NameText = styled.Text`
  margin: 20px;
  color: ${colors.sec};
  text-align: center;
`;
const LopText = styled.Text`
  font-size: ${fontSize.xb};
  color: ${colors.sec};
`;
const VersionText = styled(NameText)`
  font-size: ${fontSize.s};
`;
const ButtonsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 20px;
  align-items: flex-end;
`;
const LogoGit = styled.Text`
  flex: 1;
`;
const InfoView = styled.View`
  flex: 2;
  margin: 20px 20px;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
`;
const InfoText = styled.Text`
  font-size: ${fontSize.m};
  color: ${colors.prim};
  flex: 3;
  padding: 0 10px;
`;
