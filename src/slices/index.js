import { createSlice } from '@reduxjs/toolkit';
import { getDataForCurrency } from '../api';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    primaryColor: '#4f6d7a',
  },
  reducers: {
    changePrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
    },
  },
});

export const currenciesSlice = createSlice({
  name: 'currencies',
  initialState: {
    amount: 100,
    baseCurrency: 'USD',
    quoteCurrency: 'SEK',
    conversions: {},
  },
  reducers: {
    changeCurrencyAmount: (state, action) => {
      state.amount = action.payload;
    },
    swapCurrency: state => {
      const { baseCurrency, quoteCurrency } = state;

      state.baseCurrency = quoteCurrency;
      state.quoteCurrency = baseCurrency;
    },
    setRates: (state, action) => {
      const { base, date, rates } = action.payload;

      state.conversions[base] = {
        isFetching: false,
        date,
        rates,
      };
    },
    setCurrency: (state, action) => {
      const { currencyType, currencyValue } = action.payload;
      const defaultConversion = {
        isFetching: true,
        date: '',
        rates: {},
      };

      state[currencyType] = currencyValue;

      if (!state.conversions[currencyValue]) {
        state.conversions[currencyValue] = defaultConversion;
      }
    },
  },
});

export const fetchCurrencyConversions = currency => async dispatch => {
  const { setRates } = currenciesSlice.actions;

  let currencyRates;
  try {
    currencyRates = await getDataForCurrency(currency);
  } catch (err) {
    // maybe dispatch some error
    return;
  }

  dispatch(setRates(currencyRates));
};
