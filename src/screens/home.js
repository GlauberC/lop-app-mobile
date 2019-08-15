import React from 'react';
import { Text, View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { colors, fontSize } from '../assets/style/baseStyle';
import styled from 'styled-components/native';
import {
  Container,
  ScrollContainer
} from '../assets/style/components/viewscontainers';
import Header from '../components/header';
import Footer from '../components/footer';

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <ScrollContainer>
          <Footer />
        </ScrollContainer>
      </Container>
    );
  }
}
