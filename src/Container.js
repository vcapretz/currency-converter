import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const StyledContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #4f6d7a;
`;

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
