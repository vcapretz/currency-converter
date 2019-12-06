import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const StyledHeaderContainer = styled.SafeAreaView`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const StyledSettingsButton = styled.TouchableOpacity`
  align-self: flex-end;
  padding-vertical: 5;
  padding-horizontal: 20;
`;

const StyledIcon = styled.Image`
  width: 19;
`;

const Header = ({ onRightPress }) => (
  <StyledHeaderContainer>
    <StyledSettingsButton onPress={onRightPress}>
      <StyledIcon resizeMode="contain" source={require('../assets/gear.png')} />
    </StyledSettingsButton>
  </StyledHeaderContainer>
);

Header.propTypes = {
  onRightPress: PropTypes.func.isRequired,
};

export default Header;
