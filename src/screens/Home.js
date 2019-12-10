import React, { useCallback, useState } from 'react';
import {
  StatusBar,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import styled from 'styled-components/native';

import InputWithButton from '../components/InputWithButton';
import ReverseCurrenciesButton from '../components/ReverseCurrenciesButton';
import LastConvertedText from '../components/LastConvertedText';
import Header from '../components/Header';
import Logo from '../components/Logo';

const StyledContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #4f6d7a;
`;

const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  align-items: center;
`;

const today = new Date();
const defaultBaseCurrency = 'BRL';
const defaultQuoteCurrency = 'SEK';

export default ({ componentId }) => {
  const [baseCurrency, setBaseCurrency] = useState(defaultBaseCurrency);
  const [quoteCurrency, setQuoteCurrency] = useState(defaultQuoteCurrency);

  const navigateToCurrencyList = useCallback(
    modalTitle => () => {
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
    },
    [],
  );

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
    <StyledContainer>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <StatusBar barStyle="light-content" />

        <Header onRightPress={navigateToOptions} />

        <StyledKeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}>
          <Logo />

          <InputWithButton
            currency={baseCurrency}
            onPress={navigateToCurrencyList('Base currency')}
          />
          <InputWithButton
            currency={quoteCurrency}
            editable={false}
            onPress={navigateToCurrencyList('Quote currency')}
          />

          <LastConvertedText
            fromCurrency={baseCurrency}
            toCurrency={quoteCurrency}
            date={today}
            conversionRate={2.26}
          />

          <ReverseCurrenciesButton
            text="Reverse currencies"
            onPress={() => ({})}
          />
        </StyledKeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </StyledContainer>
  );
};
