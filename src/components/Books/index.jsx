import React from 'react'
import {
  BookImageContainer,
  BookImage,
  Container,
  Genre,
  Title,
  IconContainer,
} from './styles'
import Icon2 from 'react-native-vector-icons/Foundation'
import defaultImage from '../../assets/default-thumb.png'
import { useNavigation } from '@react-navigation/core'

export const Books = ({ id, title, genres, cover, rewardable }) => {
  const navigation = useNavigation()

  return (
    <Container
      onPress={() => navigation.navigate('Informações do Livro', { id })}
    >
      <BookImageContainer>
        <BookImage
          resizeMode="stretch"
          source={cover ? { uri: cover } : defaultImage}
        />
      </BookImageContainer>
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
