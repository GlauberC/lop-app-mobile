import React from 'react';

import styled from 'styled-components/native';
import Ionicon from 'react-native-vector-icons/Ionicons';

import { ErrMsg } from '../assets/style/components/text';
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

export default class Cadastro extends React.Component {
  state = {
    KeyboardOffset: 20,
    inputNome: '',
    inputMatricula: '',
    inputEmail: '',
    inputSenha: '',
    inputRSenha: '',
    errMsg: ''
  };
  handleKeyboardOffset = n => {
    this.setState({ KeyboardOffset: n });
  };
  handleText = (inputName, text) => {
    if (inputName === 'nome') {
      this.setState({ inputNome: text });
    } else if (inputName === 'matricula') {
      this.setState({ inputMatricula: text });
    } else if (inputName === 'email') {
      this.setState({ inputEmail: text });
    } else if (inputName === 'senha') {
      this.setState({ inputSenha: text });
    } else if (inputName === 'rsenha') {
      this.setState({ inputRSenha: text });
    }
  };
  handleCadastro = () => {
    let msg = '';
    if (this.state.inputNome.length < 5) {
      msg = 'Campo nome vazio ou inválido';
    } else if (this.state.inputMatricula.length < 5) {
      msg = 'Campo matrícula vazio ou inválido';
    } else if (this.state.inputEmail.length < 5) {
      msg = 'Campo email vazio ou inválido';
    } else if (!this.state.inputEmail.match(/\w+\@\w+\..+/gi)) {
      msg = 'Campo email inválido';
    } else if (this.state.inputSenha.length < 6) {
      msg = 'A senha deve ter ao menos 6 caracteres';
    } else if (
      this.state.inputEmail.match(/\s/) ||
      this.state.inputSenha.match(/\s/) ||
      this.state.inputMatricula.match(/\s/)
    ) {
      msg = 'Não é permitido espaço nos campos: email, senha e matricula';
    } else if (this.state.inputSenha !== this.state.inputRSenha) {
      msg = 'As senhas não estão iguais';
    } else {
      //
      // Requisição com o backend para validar o cadastro
      //
      this.props.navigation.navigate('Login', {
        criado: true
      });
    }
    this.setState({ errMsg: msg });
  };
  render() {
    return (
      <Container
        behavior="padding"
        enabled
        keyboardVerticalOffset={this.state.KeyboardOffset}
      >
        <CadastroView>
          <ErrMsg>{this.state.errMsg}</ErrMsg>
          <LabelInputView>
            <Label>Nome Completo</Label>
            <InputLogoView>
              <IconText>
                <Ionicon name="md-person" size={24} color={colors.prim} />
              </IconText>
              <Input
                placeholder="Digite seu nome"
                placeholderTextColor={colors.prim4}
                onFocus={() => this.handleKeyboardOffset(5)}
                value={this.state.inputNome}
                onChangeText={text => this.handleText('nome', text)}
              />
            </InputLogoView>
          </LabelInputView>
          <LabelInputView>
            <Label>Matrícula</Label>
            <InputLogoView>
              <IconText>
                <Ionicon name="md-school" size={24} color={colors.prim} />
              </IconText>
              <Input
                placeholder="Digite sua matrícula"
                placeholderTextColor={colors.prim4}
                maxLength={12}
                keyboardType="number-pad"
                onFocus={() => this.handleKeyboardOffset(20)}
                value={this.state.inputMatricula}
                onChangeText={text => this.handleText('matricula', text)}
              />
            </InputLogoView>
          </LabelInputView>
          <LabelInputView>
            <Label>Email</Label>
            <InputLogoView>
              <IconText>
                <Ionicon name="md-mail" size={24} color={colors.prim} />
              </IconText>
              <Input
                autoCapitalize="none"
                autoCompleteType="email"
                keyboardType="email-address"
                placeholder="Digite seu Email"
                placeholderTextColor={colors.prim4}
                onFocus={() => this.handleKeyboardOffset(20)}
                value={this.state.inputEmail}
                onChangeText={text => this.handleText('email', text)}
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
                placeholder="Digite uma senha"
                placeholderTextColor={colors.prim4}
                autoCapitalize="none"
                secureTextEntry={true}
                onFocus={() => this.handleKeyboardOffset(40)}
                value={this.state.inputSenha}
                onChangeText={text => this.handleText('senha', text)}
              />
            </InputLogoView>
          </LabelInputView>
          <LabelInputView>
            <Label>Repita a senha</Label>
            <InputLogoView>
              <IconText>
                <Ionicon name="md-unlock" size={24} color={colors.prim} />
              </IconText>
              <Input
                placeholder="Digite a senha novamente"
                placeholderTextColor={colors.prim4}
                autoCapitalize="none"
                secureTextEntry={true}
                onFocus={() => this.handleKeyboardOffset(200)}
                value={this.state.inputRSenha}
                onChangeText={text => this.handleText('rsenha', text)}
              />
            </InputLogoView>
          </LabelInputView>
          <ButtonView>
            <ButtonContainer
              style={shadowStyle.shadow}
              onPress={this.handleCadastro}
            >
              <ButtonLabel>Cadastrar</ButtonLabel>
            </ButtonContainer>
          </ButtonView>
        </CadastroView>
      </Container>
    );
  }
}

const CadastroView = styled.View`
  flex: 1;
  justify-content: center;
`;
