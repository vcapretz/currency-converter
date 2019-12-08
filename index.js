/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import Home from './src/screens/Home';
import CurrencyList from './src/screens/CurrencyList';

Navigation.registerComponent('navigation.Home', () => Home);
Navigation.registerComponent('navigation.CurrencyList', () => CurrencyList);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'navigation.Home',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
});
