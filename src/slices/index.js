import { createSlice } from '@reduxjs/toolkit';

export const currenciesSlice = createSlice({
  name: 'currencies',
  initialState: {
    amount: 100,
    baseCurrency: 'USD',
    quoteCurrency: 'SEK',
    conversions: {
      USD: {
        isFetching: false,
        base: 'USD',
        date: '2019-12-10',
        rates: {
          AUD: 1.3416,
          BGN: 1.743,
          BRL: 3.2515,
          CAD: 1.3464,
          CHF: 0.97104,
          CNY: 6.813,
          CZK: 23.547,
          DKK: 6.6302,
          GBP: 0.77858,
          HKD: 7.7908,
          HRK: 6.6068,
          HUF: 273.77,
          IDR: 13308,
          ILS: 3.5431,
          INR: 64.463,
          JPY: 110.86,
          KRW: 1118.4,
          MXN: 18.765,
          MYR: 4.281,
          NOK: 8.4117,
          NZD: 1.4071,
          PHP: 49.77,
          PLN: 3.7173,
          RON: 4.0687,
          RUB: 56.774,
          SEK: 8.6942,
          SGD: 1.3829,
          THB: 34.07,
          TRY: 3.5366,
          ZAR: 13.133,
          EUR: 0.89119,
        },
      },
    },
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
