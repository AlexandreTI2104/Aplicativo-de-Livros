import React from 'react'
import {
  ButtonBook,
  Container,
  ContainerFloatingButton,
  ViewList,
} from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Books } from '../../../components/Books'
import { FlatList, StyleSheet } from 'react-native'
import { ActivityIndicator, Colors, FAB } from 'react-native-paper'
import { fetcher } from '../../../services/api'
import useSWR from 'swr'
import { useNavigation } from '@react-navigation/core'

const Feed = () => {
  const navigation = useNavigation()
  const { data: books, error } = useSWR('/books', fetcher)

  return books ? (
    <Container>
      <FlatList
        keyExtractor={(item) => item.id}
        data={books}
        renderItem={({ item }) => (
          <Books
            id={item.id}
            title={item.title}
            genres={item.genres}
            cover={item.cover}
            rewardable={item.rewardable}
          />
        )}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      />
      <FAB
        color="white"
        style={styles.fab}
        icon="book-plus-multiple"
        onPress={() => navigation.navigate('Cadastro de Livro')}
      />
    </Container>
  ) : (
    <Container>
      <ActivityIndicator
        size={'large'}
        animating={true}
        color={Colors.blue500}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  fab: {
    backgroundColor: Colors.blue500,
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default Feed
