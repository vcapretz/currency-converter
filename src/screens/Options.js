import React from 'react';
import { ScrollView, Platform, StatusBar, Linking } from 'react-native';
import { Navigation } from 'react-native-navigation';
import styled from 'styled-components/native';
import ListItem from '../components/ListItem';
import Separator from '../components/Separator';
import Icon from 'react-native-vector-icons/Ionicons';

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const platformPrefix = { ios: 'ios', android: 'md' };
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

export default ({ componentId }) => {
  const navigateToThemes = () => {
    Navigation.push(componentId, {
      component: {
        name: 'navigation.Themes',
        options: {
          topBar: {
            title: {
              text: 'Themes',
            },
          },
        },
      },
    });
  };

  const openFixerLink = async () => {
    try {
      await Linking.openURL('https://google.com');
    } catch (error) {
      alert('Error when opening link');
    }
  };

  return (
    <StyledSafeAreaView>
      <StatusBar translucent={false} barStyle="dark-content" />
      <ScrollView>
        <ListItem
          text="Themes"
          onPress={navigateToThemes}
          icon={
            <Icon
              name={`${platformPrefix[Platform.OS]}-arrow-forward`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />

        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={openFixerLink}
          icon={
            <Icon
              name={`${platformPrefix[Platform.OS]}-link`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />
      </ScrollView>
    </StyledSafeAreaView>
  );
};
