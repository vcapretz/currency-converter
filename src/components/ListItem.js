import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';

const StyledListItemContainer = styled.View`
  padding-horizontal: 20;
  padding-vertical: 16;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

const StyledListItemText = styled.Text`
  font-size: 16;
  color: #343434;
`;

const ListItem = ({ text, onPress, icon = null }) => (
  <TouchableHighlight onPress={onPress} underlayColor="#343434">
    <StyledListItemContainer>
      <StyledListItemText>{text}</StyledListItemText>

      {icon}
    </StyledListItemContainer>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  customIcon: PropTypes.element,
};

export default ListItem;
