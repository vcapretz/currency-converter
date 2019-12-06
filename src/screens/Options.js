import React from 'react';
import { ScrollView, Platform, StatusBar } from 'react-native';
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

export default () => (
  <StyledSafeAreaView>
    <StatusBar translucent={false} barStyle="dark-content" />
    <ScrollView>
      <ListItem
        text="Themes"
        onPress={() => ({})}
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
        onPress={() => ({})}
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
