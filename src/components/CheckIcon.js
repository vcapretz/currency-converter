import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components/native';

const StyledIcon = styled.View`
  width: 30;
  height: 30;
  border-radius: 15;
  background-color: ${({ color }) => color};
  align-items: center;
  justify-content: center;
`;

const StyledIconImage = styled.Image`
  width: 18;
`;

const CheckIcon = ({ color = 'transparent', checkmark = false }) => (
  <StyledIcon color={color}>
    {checkmark && (
      <StyledIconImage
        resizeMode="contain"
        source={require('../assets/check.png')}
      />
    )}
  </StyledIcon>
);

CheckIcon.propTypes = {
  color: PropTypes.string,
  checkmark: PropTypes.bool,
};

export default CheckIcon;
