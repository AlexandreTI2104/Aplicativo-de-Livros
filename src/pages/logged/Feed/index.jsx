import React from 'react'
import {
  ButtonBook,
  Container,
  ContainerFloatingButton,
  ViewList,
} from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Books } from '../../../components/Books'
import { FlatList } from 'react-native'
import { dataBooks } from '../../../utils/databook'
import api from '../../../services/api'

const Feed = () => {
  // const handleClick = () => {
  //   api
  //     .post('/books', {
  //       book: {
  //         title: 'Quincas Borba',
  //         author: 'Machado de Assis',
  //         rewardable: true,
  //       },
  //     })
  //     .then((res) => console.log())
  //     .catch((err) => console.log(err))
  // }
  return (
    <Container>
      <FlatList
        keyExtractor={(item) => item.id}
        data={dataBooks}
        renderItem={({ item }) => (
          <ViewList>
            <Books title={item.title} genre={item.genre} />
          </ViewList>
        )}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      />
      <ContainerFloatingButton style={{ elevation: 0 }}>
        <ButtonBook>
          <Icon name="book-plus-multiple" size={30} color="#fff" />
        </ButtonBook>
      </ContainerFloatingButton>
    </Container>
  )
}

export default Feed
