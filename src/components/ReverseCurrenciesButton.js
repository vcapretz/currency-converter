import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const TouchableContainer = styled.TouchableOpacity`
  align-items: center;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const StyledImage = styled.Image`
  width: 19;
  margin-right: 11;
`;

const StyledText = styled.Text`
  color: white;
  font-size: 14;
  font-weight: 300;
  padding-vertical: 20;
`;

const ReverseCurrenciesButton = ({ text, onPress }) => (
  <TouchableContainer onPress={onPress}>
    <ButtonContainer>
      <StyledImage
        resizeMode="contain"
        source={require('../assets/icon.png')}
      />
      <StyledText>{text}</StyledText>
    </ButtonContainer>
  </TouchableContainer>
);

ReverseCurrenciesButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ReverseCurrenciesButton;
