import React from 'react';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { currenciesSlice, themeSlice } from './slices';

const store = configureStore({
  reducer: combineReducers({
    currencies: currenciesSlice.reducer,
    theme: themeSlice.reducer,
  }),
});

export const AppProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export function hoc(Component) {
  return props => {
    return (
      <AppProvider>
        <Component {...props} />
      </AppProvider>
    );
  };
}
