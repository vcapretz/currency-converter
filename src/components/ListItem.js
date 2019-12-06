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

const StyledIcon = styled.View`
  width: 30;
  height: 30;
  border-radius: 15;
  background-color: ${({ visible }) => (visible ? '#4f6d7a' : 'transparent')};
  align-items: center;
  justify-content: center;
`;

const StyledIconImage = styled.Image`
  width: 18;
`;
const Icon = ({ visible, checkmark }) => (
  <StyledIcon visible={visible}>
    {checkmark && (
      <StyledIconImage
        resizeMode="contain"
        source={require('../assets/check.png')}
      />
    )}
  </StyledIcon>
);

const ListItem = ({
  text,
  selected = false,
  checkmark = true,
  visible = true,
  onPress,
  customIcon = null,
}) => (
  <TouchableHighlight onPress={onPress} underlayColor="#343434">
    <StyledListItemContainer>
      <StyledListItemText>{text}</StyledListItemText>
      {!customIcon && selected ? (
        <Icon visible={visible} checkmark={checkmark} />
      ) : (
        <Icon />
      )}
      {customIcon}
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
