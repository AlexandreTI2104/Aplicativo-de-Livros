import React from 'react'
import { BookImage, Container, Genre, Title, IconContainer } from './styles'
import Icon2 from 'react-native-vector-icons/Foundation'
import defaultImage from '../../assets/default-thumb.png'

export const Books = ({ title, genres, cover, rewardable }) => {
  return (
    <Container>
      <BookImage
        resizeMode="cover"
        source={cover ? { uri: cover } : defaultImage}
      />
      <Title numberOfLines={1}>{title}</Title>
      {genres.map((genre) => (
        <Genre key={genre.id}>{genre.name}</Genre>
      ))}
      {rewardable ? (
        <IconContainer>
          <Icon2 name="dollar" color="white" size={20} />
        </IconContainer>
      ) : null}
    </Container>
  )
}
