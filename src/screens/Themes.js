import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import ListItem from '../components/ListItem';
import Separator from '../components/Separator';
import CheckIcon from '../components/CheckIcon';

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const primaryBlue = '#4f6d7a';
const primaryOrange = '#d57a66';
const primaryGreen = '#00bd9d';
const primaryPurple = '#9e768f';

export default () => (
  <StyledSafeAreaView>
    <StatusBar translucent={false} barStyle="dark-content" />
    <ScrollView>
      <ListItem
        text="Blue"
        onPress={() => ({})}
        icon={<CheckIcon color={primaryBlue} checkmark={false} />}
      />
      <Separator />

      <ListItem
        text="Orange"
        onPress={() => ({})}
        icon={<CheckIcon color={primaryOrange} checkmark={false} />}
      />
      <Separator />

      <ListItem
        text="Green"
        onPress={() => ({})}
        icon={<CheckIcon color={primaryGreen} checkmark={false} />}
      />
      <Separator />

      <ListItem
        text="Purple"
        onPress={() => ({})}
        icon={<CheckIcon color={primaryPurple} checkmark={false} />}
      />
    </ScrollView>
  </StyledSafeAreaView>
);
