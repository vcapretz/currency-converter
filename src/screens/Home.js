import React from 'react';
import { Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Navigation } from 'react-native-navigation';
import styled from 'styled-components/native';
import { path, pathOr } from 'ramda';

import InputWithButton from '../components/InputWithButton';
import ReverseCurrenciesButton from '../components/ReverseCurrenciesButton';
import LastConvertedText from '../components/LastConvertedText';
import Header from '../components/Header';
import Logo from '../components/Logo';

import { currenciesSlice, fetchCurrencyConversions } from '../slices';
import { useSelector, useDispatch } from 'react-redux';

const StyledContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.primaryColor};
`;

const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  align-items: center;
`;

export default ({ componentId }) => {
  const dispatch = useDispatch();

  const primaryColor = useSelector(path(['theme', 'primaryColor']));

  const baseCurrency = useSelector(path(['currencies', 'baseCurrency']));
  const quoteCurrency = useSelector(path(['currencies', 'quoteCurrency']));
  const amount = useSelector(path(['currencies', 'amount']));
  const conversion = useSelector(state => {
    const conversionRate = pathOr(
      0,
      [
        'currencies',
        'conversions',
        state.currencies.baseCurrency,
        'rates',
        state.currencies.quoteCurrency,
      ],
      state,
    );

    const date = pathOr(
      null,
      ['currencies', 'conversions', baseCurrency, 'date'],
      state,
    );
    const lastConvertedDate = date ? new Date(date) : new Date();

    const isLoading = pathOr(
      true,
      [
        'currencies',
        'conversions',
        state.currencies.baseCurrency,
        'isFetching',
      ],
      state,
    );

    return { lastConvertedDate, conversionRate, isLoading };
  });

  const { conversionRate, lastConvertedDate, isLoading } = conversion;

  React.useEffect(() => {
    if (conversionRate === 0) {
      dispatch(fetchCurrencyConversions(baseCurrency));
    }
  }, [baseCurrency, conversionRate, dispatch, isLoading]);

  const convertedAmount = conversionRate * parseFloat(amount || 0);
  const { changeCurrencyAmount, swapCurrency } = currenciesSlice.actions;

  const navigateToCurrencyList = (modalTitle, modalType) => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'navigation.CurrencyList',
              passProps: {
                modalType,
              },
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
          statusBar: {
            style: 'dark',
          },
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
      <StyledContainer primaryColor={primaryColor}>
        <Header onRightPress={navigateToOptions} />

        <StyledKeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}>
          <Logo />

          <InputWithButton
            currency={baseCurrency}
            onChangeText={text => dispatch(changeCurrencyAmount(text))}
            onPress={() =>
              navigateToCurrencyList('Base currency', 'baseCurrency')
            }
            value={amount.toString()}
          />
          <InputWithButton
            currency={quoteCurrency}
            editable={false}
            onPress={() =>
              navigateToCurrencyList('Quote currency', 'quoteCurrency')
            }
            value={isLoading ? 'Loading...' : convertedAmount.toFixed(2)}
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
