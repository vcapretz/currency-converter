import React from 'react';
import { FlatList } from 'react-native';
import { Navigation } from 'react-native-navigation';
import styled from 'styled-components/native';
import { prop } from 'ramda';

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
  const { setCurrency } = currenciesSlice.actions;
  const selectedCurrency = useSelector(prop(modalType));

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
                color={item === selectedCurrency ? '#4f6d7a' : 'transparent'}
                checkmark={item === selectedCurrency}
              />
            }
          />
        )}
      />
    </StyledSafeAreaView>
  );
};
