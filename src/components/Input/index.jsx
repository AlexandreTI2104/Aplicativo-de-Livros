import React from 'react';
import { Container } from './styles';

const Input = ({ placeholder }) => {
  return (
    <Container placeholder={placeholder} placeholderTextColor="#114978" />
  );
}

export default Input;