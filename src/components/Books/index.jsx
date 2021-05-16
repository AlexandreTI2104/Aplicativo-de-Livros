import React from 'react'
import { BookImage, Container, Genre, Title } from './styles'

export const Books = ({ title, genres, cover }) => {
  return (
    <Container>
      <BookImage />
      <Title numberOfLines={1}>{title}</Title>
      {genres.map((genre) => (
        <Genre key={genre.id}>{genre.name}</Genre>
      ))}
    </Container>
  )
}
