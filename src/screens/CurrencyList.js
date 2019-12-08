import React from 'react';
import { FlatList, StatusBar } from 'react-native';
import { Navigation } from 'react-native-navigation';
import styled from 'styled-components/native';

import ListItem from '../components/ListItem';
import Separator from '../components/Separator';
import currencies from '../data/currencyList';
import CheckIcon from '../components/CheckIcon';

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export default ({ componentId }) => (
  <StyledSafeAreaView>
    <StatusBar translucent={false} barStyle="light-content" />
    <FlatList
      data={currencies}
      keyExtractor={item => item}
      ItemSeparatorComponent={Separator}
      renderItem={({ item }) => (
        <ListItem
          text={item}
          onPress={() => Navigation.dismissModal(componentId)}
          icon={
            <CheckIcon
              color={item === 'BRL' ? '#4f6d7a' : 'transparent'}
              checkmark={item === 'BRL'}
            />
          }
        />
      )}
    />
  </StyledSafeAreaView>
);
