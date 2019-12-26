import React from 'react';
import { FlatList } from 'react-native';
import { Navigation } from 'react-native-navigation';
import styled from 'styled-components/native';
import { path } from 'ramda';

import ListItem from '../components/ListItem';
import Separator from '../components/Separator';
import currencies from '../data/currencyList';
import CheckIcon from '../components/CheckIcon';

import { currenciesSlice } from '../slices';
import { useSelector, useDispatch } from 'react-redux';

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export default ({ componentId, modalType }) => {
  const dispatch = useDispatch();

  const primaryColor = useSelector(path(['theme', 'primaryColor']));

  const selectedCurrency = useSelector(path(['currencies', modalType]));

  const { setCurrency } = currenciesSlice.actions;
  return (
    <StyledSafeAreaView>
      <FlatList
        data={currencies}
        keyExtractor={item => item}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }) => (
          <ListItem
            text={item}
            onPress={() => {
              dispatch(
                setCurrency({ currencyType: modalType, currencyValue: item }),
              );

              Navigation.dismissModal(componentId);
            }}
            icon={
              <CheckIcon
                color={item === selectedCurrency ? primaryColor : 'transparent'}
                checkmark={item === selectedCurrency}
              />
            }
          />
        )}
      />
    </StyledSafeAreaView>
  );
};
