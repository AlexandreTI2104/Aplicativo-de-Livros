import React from 'react';
import { Container, ButtonText } from './styles';

const Button = ({ children, disabled, ...rest }) => {
  return (
    <Container activeOpacity={0.6} disabled={disabled} isDisabled={disabled} {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
}

export default Button;