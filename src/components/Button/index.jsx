import React from 'react';
import { Container, ButtonText } from './styles';

const Button = ({ children }) => {
  return (
    <Container activeOpacity={0.6}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
}

export default Button;