import React from 'react';
import { ScrollView } from 'react-native';
import { Navigation } from 'react-native-navigation';
import styled from 'styled-components/native';
import ListItem from '../components/ListItem';
import Separator from '../components/Separator';
import CheckIcon from '../components/CheckIcon';
import { themeSlice } from '../slices';
import { useDispatch } from 'react-redux';

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const primaryBlue = '#4f6d7a';
const primaryOrange = '#d57a66';
const primaryGreen = '#00bd9d';
const primaryPurple = '#9e768f';

export default ({ componentId }) => {
  const dispatch = useDispatch();
  const { changePrimaryColor } = themeSlice.actions;

  const handlePressColor = color => {
    dispatch(changePrimaryColor(color));

    Navigation.pop(componentId);
  };

  return (
    <StyledSafeAreaView>
      <ScrollView>
        <ListItem
          text="Blue"
          onPress={() => handlePressColor(primaryBlue)}
          icon={<CheckIcon color={primaryBlue} checkmark={false} />}
        />
        <Separator />

        <ListItem
          text="Orange"
          onPress={() => handlePressColor(primaryOrange)}
          icon={<CheckIcon color={primaryOrange} checkmark={false} />}
        />
        <Separator />

        <ListItem
          text="Green"
          onPress={() => handlePressColor(primaryGreen)}
          icon={<CheckIcon color={primaryGreen} checkmark={false} />}
        />
        <Separator />

        <ListItem
          text="Purple"
          onPress={() => handlePressColor(primaryPurple)}
          icon={<CheckIcon color={primaryPurple} checkmark={false} />}
        />
      </ScrollView>
    </StyledSafeAreaView>
  );
};
