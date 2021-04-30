import React from 'react';
import { Container } from './styles';

const Input = ({ placeholder, onChangeText }) => {
  return (
    <Container placeholder={placeholder} placeholderTextColor="#114978" onChangeText={onChangeText} />
  );
}

export default Input;