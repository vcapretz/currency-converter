import { Navigation } from 'react-native-navigation';
import Home from './src/screens/Home';
import CurrencyList from './src/screens/CurrencyList';
import Options from './src/screens/Options';
import Themes from './src/screens/Themes';
import { hoc } from './src/AppProvider';

Navigation.registerComponent('navigation.Home', () => hoc(Home));
Navigation.registerComponent('navigation.CurrencyList', () => CurrencyList);
Navigation.registerComponent('navigation.Options', () => Options);
Navigation.registerComponent('navigation.Themes', () => Themes);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    statusBar: {
      style: 'light',
    },
    // TODO 👇
    // layout: {
    //   backgroundColor: 'black',
    // },
    topBar: {
      background: {
        color: 'white',
      },
      title: {
        color: 'black',
      },
    },
  });

  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'navigation.Themes',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
          {
            component: {
              name: 'navigation.Options',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
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
