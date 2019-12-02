import React from 'react';
import { Dimensions, Image, StatusBar } from 'react-native';
import styled from 'styled-components/native';

import Container from './Container';
import InputWithButton from './InputWithButton';

const imageWidth = Dimensions.get('window').width / 2;

const ImageContainer = styled.ImageBackground`
  width: ${imageWidth};
  height: ${imageWidth};
  align-items: center;
  justify-content: center;
`;

const HomeText = styled.Text`
  font-weight: 600;
  font-size: 28;
  margin-top: 15;
  color: white;
`;

export default () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <ImageContainer
      resizeMode="contain"
      source={require('./assets/background.png')}>
      <Image
        resizeMode="contain"
        style={{ width: imageWidth / 2 }}
        source={require('./assets/logo.png')}
      />
    </ImageContainer>
    <HomeText>Currency Converter</HomeText>
    <InputWithButton currency="BRL" onPress={() => ({})} />
    <InputWithButton currency="SEK" editable={false} onPress={() => ({})} />
  </Container>
);
