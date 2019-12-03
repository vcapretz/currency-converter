import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import dayjs from 'dayjs';

const StyledText = styled.Text`
  color: white;
  font-size: 12;
  text-align: center;
`;

const LastConvertedText = ({
  fromCurrency,
  toCurrency,
  conversionRate,
  date,
}) => (
  <StyledText>
    1 {fromCurrency} = {conversionRate} {toCurrency} as of{' '}
    {dayjs(date).format('MMMM DD, YYYY')}
  </StyledText>
);

LastConvertedText.propTypes = {
  date: PropTypes.object.isRequired,
  fromCurrency: PropTypes.string.isRequired,
  toCurrency: PropTypes.string.isRequired,
  conversionRate: PropTypes.number.isRequired,
};

export default LastConvertedText;
