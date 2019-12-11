import React from 'react';
import {
  StatusBar,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import styled from 'styled-components/native';
import { prop, pathOr } from 'ramda';

import InputWithButton from '../components/InputWithButton';
import ReverseCurrenciesButton from '../components/ReverseCurrenciesButton';
import LastConvertedText from '../components/LastConvertedText';
import Header from '../components/Header';
import Logo from '../components/Logo';

import { currenciesSlice } from '../slices';
import { useSelector, useDispatch } from 'react-redux';

const StyledContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #4f6d7a;
`;

const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  align-items: center;
`;

export default ({ componentId }) => {
  const dispatch = useDispatch();

  const baseCurrency = useSelector(prop('baseCurrency'));
  const quoteCurrency = useSelector(prop('quoteCurrency'));
  const amount = useSelector(prop('amount'));
  const conversion = useSelector(state => {
    const conversionRate = pathOr(
      0,
      ['conversions', state.baseCurrency, 'rates', state.quoteCurrency],
      state,
    );

    const date = pathOr(null, ['conversions', baseCurrency, 'date'], state);
    const lastConvertedDate = date ? new Date(date) : new Date();

    const isLoading = pathOr(
      false,
      ['conversions', state.baseCurrency, 'isFetching'],
      state,
    );

    return { lastConvertedDate, conversionRate, isLoading };
  });

  const { conversionRate, lastConvertedDate } = conversion;
  const convertedAmount = conversionRate * amount;
  const { changeCurrencyAmount, swapCurrency } = currenciesSlice.actions;

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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <StyledContainer>
        <StatusBar barStyle="light-content" />

        <Header onRightPress={navigateToOptions} />

        <StyledKeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}>
          <Logo />

          <InputWithButton
            currency={baseCurrency}
            onChangeText={text => dispatch(changeCurrencyAmount(text))}
            onPress={navigateToCurrencyList('Base currency')}
            value={amount.toString()}
          />
          <InputWithButton
            currency={quoteCurrency}
            editable={false}
            onPress={navigateToCurrencyList('Quote currency')}
            value={convertedAmount.toFixed(2)}
          />

          <LastConvertedText
            conversionRate={conversionRate}
            date={lastConvertedDate}
            fromCurrency={baseCurrency}
            toCurrency={quoteCurrency}
          />

          <ReverseCurrenciesButton
            text="Reverse currencies"
            onPress={() => dispatch(swapCurrency())}
          />
        </StyledKeyboardAvoidingView>
      </StyledContainer>
    </TouchableWithoutFeedback>
  );
};
