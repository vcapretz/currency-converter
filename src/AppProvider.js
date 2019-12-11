import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { currenciesSlice } from './slices';

const store = configureStore({
  reducer: currenciesSlice.reducer,
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
