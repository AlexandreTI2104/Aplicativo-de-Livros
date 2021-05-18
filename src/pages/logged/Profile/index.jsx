import React, { useCallback, useState } from 'react'
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/Foundation'
import IconEdit from 'react-native-vector-icons/FontAwesome5'
import { Books } from '../../../components/Books'
import { dataBooks } from '../../../utils/databook'
import { useNavigation } from '@react-navigation/native'
import Button from '../../../components/Button'
import { ActivityIndicator, Avatar, Colors } from 'react-native-paper'
import { fetcher } from '../../../services/api'
import useSWR from 'swr'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TabView, SceneMap } from 'react-native-tab-view'
import {
  Container,
  BooksContainer,
  List,
  MenuProfile,
  MenuProfilerButton,
  MenuProfilerButtonText,
  Name,
  NameContainer,
  ProfileContainer,
  ProfilePic,
  ProfilePicInitial,
  ViewDone,
  ViewBill,
  ViewBill2,
  ViewButton,
  CenterContainer,
  AmountView,
  LoadingContainer,
} from './styles'

const FirstRoute = () => {
  const { data: myBooks, error: myBooksError } = useSWR('/mybooks', fetcher)

  return (
    <BooksContainer>
      <FlatList
        data={myBooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Books
            id={item.id}
            genres={item.genres}
            title={item.title}
            cover={item.cover}
            rewardable={item.rewardable}
          />
        )}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      />
    </BooksContainer>
  )
}

const SecondRoute = () => {
  const { data: wanted_books, error: myBooksError } = useSWR(
    '/wanted_books',
    fetcher
  )

  return (
    <BooksContainer>
      <FlatList
        data={wanted_books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Books
            id={item.id}
            genres={item.genres}
            title={item.title}
            cover={item.cover}
            rewardable={item.rewardable}
          />
        )}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      />
    </BooksContainer>
  )
}

const Profile = () => {
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  })
  const { data: user, error } = useSWR('/user', fetcher)

  const navigation = useNavigation()

  const layout = useWindowDimensions()

  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'first', title: 'CADASTRADOS' },
    { key: 'second', title: 'SOLICITADOS' },
  ])

  return user ? (
    <Container>
      <ProfileContainer>
        <Avatar.Text size={70} label={user.name[0]} />
        <CenterContainer>
          <Name>{user.name}</Name>
          <AmountView>
            <ViewBill2>
              <Icon2 name="dollar" color="white" size={20} />
            </ViewBill2>
            <Text style={{ marginLeft: 10 }}>{user.points}</Text>
            <TouchableOpacity
              style={{ position: 'absolute', right: 18 }}
              onPress={() => navigation.goBack()}
            >
              <IconEdit name="user-edit" color="gray" />
            </TouchableOpacity>
          </AmountView>
        </CenterContainer>
      </ProfileContainer>
      <TabView
        style={{ backgroundColor: 'red' }}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </Container>
  ) : (
    <LoadingContainer>
      <ActivityIndicator
        size={'large'}
        animating={true}
        color={Colors.blue500}
      />
    </LoadingContainer>
  )
}

export default Profile
