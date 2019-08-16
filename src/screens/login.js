import React from 'react';

import { routes } from '../services/api'

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
    inputEmail: '',
    inputSenha: '',
    inputEmailEsqueceu: '',
    successMsg: '',
    errMsg: ''
  };
  componentWillMount() {
    if (this.props.navigation.getParam('criado')) {
      this.setState({ successMsg: 'Usuário criado com sucesso' });
    }
  }
  handleEntrar = async () => {
    let msg = '';
    if (this.state.inputEmail.length < 5) {
      msg = 'Campo email vazio ou inválido';
    } else if (!this.state.inputEmail.match(/\w+\@\w+\..+/gi)) {
      msg = 'Campo email inválido';
    } else if (this.state.inputSenha.length < 6) {
      msg = 'A senha deve ter ao menos 6 caracteres';
    } else {
      const data = {
        email: this.state.inputEmail,
        password: this.state.inputSenha
      }
      const response = await fetch(routes.signin, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const content = await response.json()
      if (content.token) {
        this.setState({ successMsg: content.token })
        // this.props.navigation.navigate('Home');
      } else {
        if (content.error === 'UserNotFound') {
          msg = "Usuário não encontrado"
        } else if (content.error === 'WrongPassword') {
          msg = "Senha incorreta"
        }
      }
    }

    this.setState({ errMsg: msg });
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
                autoCapitalize="none"
                autoCompleteType="email"
                keyboardType="email-address"
                onFocus={() => this.handleKeyboardOffset(20)}
                onChangeText={text => this.setState({ inputEmail: text })}
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
                autoCapitalize="none"
                secureTextEntry={true}
                placeholder="Digite sua senha"
                placeholderTextColor={colors.prim4}
                onFocus={() => this.handleKeyboardOffset(20)}
                onChangeText={text => this.setState({ inputSenha: text })}
              />
            </InputLogoView>
          </LabelInputView>
          <ButtonView>
            <ButtonContainer style={shadowStyle.shadow} onPress={this.handleEntrar}>
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
                      autoCapitalize="none"
                      autoCompleteType="email"
                      keyboardType="email-address"
                      onChangeText={text => this.setState({ inputEmailEsqueceu: text })}
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
