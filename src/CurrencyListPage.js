import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  Image,
  StatusBar,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components/native';

import currencies from './data/currencyList';

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

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

const StyledSeparator = styled.View`
  height: ${StyleSheet.hairlineWidth};
  margin-left: 20;
  background-color: #e2e2e2;
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
        source={require('./assets/check.png')}
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
}) => (
  <TouchableHighlight onPress={onPress} underlayColor="#343434">
    <StyledListItemContainer>
      <StyledListItemText>{text}</StyledListItemText>
      {selected ? <Icon visible={visible} checkmark={checkmark} /> : <Icon />}
    </StyledListItemContainer>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

export default () => (
  <StyledSafeAreaView>
    <StatusBar translucent={false} barStyle="dark-content" />
    <FlatList
      data={currencies}
      keyExtractor={item => item}
      ItemSeparatorComponent={StyledSeparator}
      renderItem={({ item }) => (
        <ListItem text={item} selected={item === 'BRL'} onPress={() => ({})} />
      )}
    />
  </StyledSafeAreaView>
);
