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

const Feed = () => {
  const { data: books, error } = useSWR('/books', fetcher)

  return books ? (
    <Container>
      <FlatList
        initialScrollIndex={1}
        keyExtractor={(item) => item.id}
        data={books}
        renderItem={({ item }) => (
          <Books title={item.title} genres={item.genres} cover={item.cover} />
        )}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      />
      <FAB
        style={styles.fab}
        icon="book-plus-multiple"
        onPress={() => console.log('Pressed')}
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
    backgroundColor: '#E10050',
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default Feed
