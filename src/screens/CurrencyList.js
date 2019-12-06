import React from 'react';
import { FlatList, StatusBar } from 'react-native';
import styled from 'styled-components/native';

import ListItem from '../components/ListItem';
import Separator from '../components/Separator';
import currencies from '../data/currencyList';

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export default () => (
  <StyledSafeAreaView>
    <StatusBar translucent={false} barStyle="dark-content" />
    <FlatList
      data={currencies}
      keyExtractor={item => item}
      ItemSeparatorComponent={Separator}
      renderItem={({ item }) => (
        <ListItem text={item} selected={item === 'BRL'} onPress={() => ({})} />
      )}
    />
  </StyledSafeAreaView>
);