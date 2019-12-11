import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

const InputContainer = styled.View`
  background-color: ${({ editable }) => (editable ? 'white' : '#f0f0f0')};
  width: 90%;
  height: ${INPUT_HEIGHT};
  border-radius: ${BORDER_RADIUS};
  flex-direction: row;
  align-items: center;
  margin-vertical: 11;
`;

const ButtonContainer = styled.TouchableHighlight`
  height: ${INPUT_HEIGHT};
  align-items: center;
  justify-content: center;
  background-color: white;
  border-top-left-radius: ${BORDER_RADIUS};
  border-bottom-left-radius: ${BORDER_RADIUS};
  border-right-color: #e2e2e2;
  border-right-width: ${StyleSheet.hairlineWidth};
`;

const ButtonText = styled.Text`
  color: #4f6d7a;
  padding-horizontal: 16;
  font-weight: 600;
  font-size: 20;
`;

const StyledTextInput = styled.TextInput`
  height: ${INPUT_HEIGHT};
  flex: 1;
  font-size: 18;
  padding-horizontal: 8;
  color: #797979;
`;

const InputWithButton = ({
  currency,
  editable = true,
  onChangeText,
  onPress,
  value,
}) => (
  <InputContainer editable={editable}>
    <ButtonContainer underlayColor="#b3b3b3" onPress={onPress}>
      <ButtonText>{currency}</ButtonText>
    </ButtonContainer>

    <StyledTextInput
      editable={editable}
      keyboardType="decimal-pad"
      onChangeText={onChangeText}
      value={value}
    />
  </InputContainer>
);

InputWithButton.propTypes = {
  currency: PropTypes.string.isRequired,
  editable: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  onChangeText: PropTypes.func,
};

export default InputWithButton;
