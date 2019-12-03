import React from 'react';
import { StatusBar, Platform } from 'react-native';
import styled from 'styled-components/native';

import Container from './Container';
import InputWithButton from './InputWithButton';
import ReverseCurrenciesButton from './ReverseCurrenciesButton';
import LastConvertedText from './LastConvertedText';
import Header from './Header';
import Logo from './Logo';

const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  align-items: center;
`;

const today = new Date();

export default () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />

    <Header onRightPress={() => ({})} />

    <StyledKeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <Logo />

      <InputWithButton currency="BRL" onPress={() => ({})} />
      <InputWithButton currency="SEK" editable={false} onPress={() => ({})} />

      <LastConvertedText
        fromCurrency="BRL"
        toCurrency="SEK"
        date={today}
        conversionRate={2.26}
      />

      <ReverseCurrenciesButton text="Reverse currencies" onPress={() => ({})} />
    </StyledKeyboardAvoidingView>
  </Container>
);
