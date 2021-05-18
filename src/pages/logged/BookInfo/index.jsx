import React from 'react'
import { SafeAreaView, Text, Image, Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { fetcher } from '../../../services/api'
import useSWR from 'swr'
import { ActivityIndicator, Avatar, Colors, Chip } from 'react-native-paper'
import defaultImage from '../../../assets/default.png'
import Button from '../../../components/Button'
import api from '../../../services/api'

import * as Styled from './styles'

export default function BookInfo() {
  const route = useRoute()
  const navigation = useNavigation()
  const { data: book, error } = useSWR(`/books/${route.params.id}`, fetcher)

  const handleSolicitation = () => {
    api
      .post('/borrow_requests', { book_id: route.params.id })
      .then(() => {
        Alert.alert(
          'Livro solicitado com sucesso!',
          'Aguarde o contato do dono'
        )
        navigation.navigate('Feed')
      })
      .catch((error) => {
        Alert.alert(error)
      })
  }

  return book ? (
    <Styled.Container>
      <Styled.BookImage
        resizeMode="stretch"
        source={book.cover ? { uri: book.cover } : defaultImage}
      />
      <Styled.InfoContainer>
        <Styled.Text>Título: {book.title}</Styled.Text>
        <Styled.Text>Autor: {book.author}</Styled.Text>
        <Styled.GenresContainer>
          <Styled.Text>Gêneros: </Styled.Text>
          <Styled.ChipsListContainer>
            {book.genres.map((genre) => (
              <Styled.ChipContainer key={genre.id}>
                <Chip>{genre.name}</Chip>
              </Styled.ChipContainer>
            ))}
          </Styled.ChipsListContainer>
        </Styled.GenresContainer>
        <Styled.OwnerContainer>
          <Styled.OwnerLabel>
            <Styled.Text>Dono: </Styled.Text>
          </Styled.OwnerLabel>
          <Avatar.Text size={30} label={book.owner[0]} />
          <Styled.Text> {book.owner}</Styled.Text>
        </Styled.OwnerContainer>
      </Styled.InfoContainer>
      <Styled.ButtonContainer>
        <Button onPress={handleSolicitation}>Solicitar Livro</Button>
      </Styled.ButtonContainer>
    </Styled.Container>
  ) : (
    <Styled.Container>
      <ActivityIndicator
        size={'large'}
        animating={true}
        color={Colors.blue500}
      />
    </Styled.Container>
  )
}
