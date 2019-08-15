import React from 'react';

import styled from 'styled-components/native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';

import { ErrMsg, SuccessMsg } from '../assets/style/components/text';
import { colors, fontSize } from '../assets/style/baseStyle';
import { Container } from '../assets/style/components/viewscontainers';
import { shadowStyle } from '../assets/style/effects/shadow';
import {
  Label,
  InputLogoView,
  IconText,
  Input,
  LabelInputView
} from '../assets/style/components/inputiconlabel';
import {
  ButtonView,
  ButtonContainer,
  ButtonLabel
} from '../assets/style/components/buttons';

export default class Login extends React.Component {
  state = {
    esqueceuMode: false,
    KeyboardOffset: 20,
    successMsg: '',
    errMsg: ''
  };
  componentWillMount() {
    if (this.props.navigation.getParam('criado')) {
      this.setState({ successMsg: 'Usuário criado com sucesso' });
    }
  }
  handleEntrar = () => {
    this.props.navigation.navigate('Home');
  };
  handleEsqueceu = () => {
    this.setState({ esqueceuMode: !this.state.esqueceuMode });
  };
  handleKeyboardOffset = n => {
    if (n === 20) {
      this.setState({ esqueceuMode: false });
    }
    this.setState({ KeyboardOffset: n });
  };
  render() {
    return (
      <Container
        behavior="padding"
        enabled
        keyboardVerticalOffset={this.state.KeyboardOffset}
      >
        <LoginView>
          <SuccessMsg>{this.state.successMsg}</SuccessMsg>
          <ErrMsg>{this.state.errMsg}</ErrMsg>
          <LabelInputView>
            <Label>Email</Label>
            <InputLogoView>
              <IconText>
                <Ionicon name="md-mail" size={24} color={colors.prim} />
              </IconText>
              <Input
                placeholder="Digite seu e-mail"
                placeholderTextColor={colors.prim4}
                onFocus={() => this.handleKeyboardOffset(20)}
              />
            </InputLogoView>
          </LabelInputView>
          <LabelInputView>
            <Label>Senha</Label>
            <InputLogoView>
              <IconText>
                <Ionicon name="md-unlock" size={24} color={colors.prim} />
              </IconText>
              <Input
                placeholder="Digite sua senha"
                placeholderTextColor={colors.prim4}
                onFocus={() => this.handleKeyboardOffset(20)}
              />
            </InputLogoView>
          </LabelInputView>
          <ButtonView>
            <ButtonContainer style={shadowStyle.shadow}>
              <ButtonLabel>Entrar</ButtonLabel>
            </ButtonContainer>
          </ButtonView>
          <RecuperarSenhaView>
            <ButtonView>
              <EsqueceuButton
                style={[
                  shadowStyle.shadow,
                  this.state.esqueceuMode
                    ? { backgroundColor: colors.prim }
                    : null
                ]}
                onPress={this.handleEsqueceu}
              >
                <ButtonLabel
                  style={this.state.esqueceuMode ? { color: colors.sec } : null}
                >
                  Esqueceu a senha?
                </ButtonLabel>
              </EsqueceuButton>
            </ButtonView>
            {this.state.esqueceuMode ? (
              <View>
                <LabelInputView>
                  <Label>Email</Label>
                  <InputLogoView>
                    <IconText>
                      <Ionicon name="md-mail" size={24} color={colors.prim} />
                    </IconText>
                    <Input
                      placeholder="Digite seu e-mail"
                      placeholderTextColor={colors.prim4}
                      onFocus={() => this.handleKeyboardOffset(100)}
                    />
                  </InputLogoView>
                </LabelInputView>
                <ButtonView>
                  <ButtonContainer style={shadowStyle.shadow}>
                    <ButtonLabel>Enviar</ButtonLabel>
                  </ButtonContainer>
                </ButtonView>
              </View>
            ) : null}
          </RecuperarSenhaView>
        </LoginView>
      </Container>
    );
  }
}

const LoginView = styled.View`
  flex: 1;
  justify-content: center;
`;
const RecuperarSenhaView = styled.View`
  margin: 10px 0;
`;
const EsqueceuButton = styled(ButtonContainer)`
  width: 180px;
`;
