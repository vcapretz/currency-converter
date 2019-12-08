import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import styled from 'styled-components/native';

import Container from '../components/Container';
import InputWithButton from '../components/InputWithButton';
import ReverseCurrenciesButton from '../components/ReverseCurrenciesButton';
import LastConvertedText from '../components/LastConvertedText';
import Header from '../components/Header';
import Logo from '../components/Logo';

const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  align-items: center;
`;

const today = new Date();

export default ({ componentId }) => {
  const navigateToCurrencyList = modalTitle => () => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'navigation.CurrencyList',
              options: {
                topBar: {
                  title: {
                    text: modalTitle,
                  },
                },
              },
            },
          },
        ],
      },
    });
  };

  const navigateToOptions = () => {
    Navigation.push(componentId, {
      component: {
        name: 'navigation.Options',
        options: {
          topBar: {
            title: {
              text: 'Options',
            },
          },
        },
      },
    });
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" />

      <Header onRightPress={navigateToOptions} />

      <StyledKeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <Logo />

        <InputWithButton
          currency="BRL"
          onPress={navigateToCurrencyList('Base currency')}
        />
        <InputWithButton
          currency="SEK"
          editable={false}
          onPress={navigateToCurrencyList('Quote currency')}
        />

        <LastConvertedText
          fromCurrency="BRL"
          toCurrency="SEK"
          date={today}
          conversionRate={2.26}
        />

        <ReverseCurrenciesButton
          text="Reverse currencies"
          onPress={() => ({})}
        />
      </StyledKeyboardAvoidingView>
    </Container>
  );
};
