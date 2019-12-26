import React, { useEffect, useState } from 'react';
import { Dimensions, Animated, Keyboard, Platform } from 'react-native';
import styled from 'styled-components/native';
import { path } from 'ramda';
import { useSelector } from 'react-redux';

const largeImageContainerWidth = Dimensions.get('window').width / 2;
const largeImageWidth = largeImageContainerWidth / 2;

const smallImageContainerWidth = largeImageContainerWidth / 2;
const smallImageWidth = largeImageWidth / 2;

const ANIMATION_DURATION = 250;

const ImageContainer = Animated.createAnimatedComponent(styled.ImageBackground`
  align-items: center;
  justify-content: center;
`);

const HomeText = styled.Text`
  font-weight: 600;
  font-size: 28;
  margin-top: 15;
  color: white;
`;

const Logo = () => {
  const [imageContainerWidth] = useState(
    new Animated.Value(largeImageContainerWidth),
  );
  const [imageWidth] = useState(new Animated.Value(largeImageWidth));

  const primaryColor = useSelector(path(['theme', 'primaryColor']));

  useEffect(() => {
    const keyboardWillShow = () => {
      Animated.parallel([
        Animated.timing(imageContainerWidth, {
          toValue: smallImageContainerWidth,
          duration: ANIMATION_DURATION,
          // useNativeDriver: true, // THIS FUCKER
        }),

        Animated.timing(imageWidth, {
          toValue: smallImageWidth,
          duration: ANIMATION_DURATION,
          // useNativeDriver: true, // THIS FUCKER
        }),
      ]).start();
    };

    const keyboardWillHide = () => {
      Animated.parallel([
        Animated.timing(imageContainerWidth, {
          toValue: largeImageContainerWidth,
          duration: ANIMATION_DURATION,
          // useNativeDriver: true, // THIS FUCKER
        }),

        Animated.timing(imageWidth, {
          toValue: largeImageWidth,
          duration: ANIMATION_DURATION,
          // useNativeDriver: true, // THIS FUCKER
        }),
      ]).start();
    };

    // Android doesn't have willShow/Hide methods, using Did instead
    const listenerMethod = Platform.OS === 'ios' ? 'Will' : 'Did';

    Keyboard.addListener(`keyboard${listenerMethod}Show`, keyboardWillShow);
    Keyboard.addListener(`keyboard${listenerMethod}Hide`, keyboardWillHide);

    return () => {
      Keyboard.removeListener(keyboardWillShow);
      Keyboard.removeListener(keyboardWillHide);
    };
  }, [imageContainerWidth, imageWidth]);

  return (
    <>
      <ImageContainer
        style={{ width: imageContainerWidth, height: imageContainerWidth }}
        resizeMode="contain"
        source={require('../assets/background.png')}>
        <Animated.Image
          style={{ width: imageWidth, tintColor: primaryColor }}
          resizeMode="contain"
          source={require('../assets/logo.png')}
        />
      </ImageContainer>
      <HomeText>Currency Converter</HomeText>
    </>
  );
};
export default Logo;
