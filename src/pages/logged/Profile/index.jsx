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
} from './styles'

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
)

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
)

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
)

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
})

const Profile = () => {
  const { data: user, error } = useSWR('/user', fetcher)
  const { data: myBooks, error: myBooksError } = useSWR('/mybooks', fetcher)

  const navigation = useNavigation()

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
      <Name style={{ marginLeft: 10 }}>Meus livros cadastrados</Name>

      {/* <FlatList
            data={dataBooks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ViewList>
                <Books genre={item.genre} title={item.title} />
                <ViewDone>
                  <Icon name="done" color="white" />
                </ViewDone>
              </ViewList>
            )}
            numColumns={3}
            showsVerticalScrollIndicator={false}
          /> */}
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

export default Profile
