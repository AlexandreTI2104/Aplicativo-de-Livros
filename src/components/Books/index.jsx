import React from 'react';
import { BookImage, Container, Genre, Title } from './styles';

export const Books = ({title, genre}) => (
  <Container>
    <BookImage />
    <Title>{title}</Title>
    <Genre>{genre}</Genre>
  </Container>
)