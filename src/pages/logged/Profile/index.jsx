import React, { useCallback, useState } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Foundation';
import IconEdit from 'react-native-vector-icons/FontAwesome5';
import { Books } from '../../../components/Books';
import { dataBooks } from '../../../utils/databook';
import { ViewList } from '../Feed/styles';
import { useNavigation } from '@react-navigation/native'
import Button from '../../../components/Button';
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
} from './styles';

const Profile = () => {
  const [isRead, setIsRead] = useState(false);
  const [isNotRead, setIsNotRead] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);
  const navigation = useNavigation();
  const handleButton = useCallback((number) => {
    switch (number) {
      case 1:
        setIsRead(true)
        setIsNotRead(false)
        setIsRegistered(false)
        break;
      case 2:
        setIsRead(false)
        setIsNotRead(true)
        setIsRegistered(false)
        break;
      case 3:
        setIsRead(false)
        setIsNotRead(false)
        setIsRegistered(true)
        break;
      default:
        break;
    }
    
  },[]);
  return (
    <Container>
      <NameContainer>
        <ProfileContainer>
          <ProfilePic>
            <ProfilePicInitial>N</ProfilePicInitial>
          </ProfilePic>
          <CenterContainer>
            <Name>Nome da Silva Souza</Name>
            <AmountView>
              <ViewBill2>
                <Icon2 name="dollar" color="white" size={20} />
              </ViewBill2>
              <Text style={{ marginLeft: 10}}>200</Text>
              <TouchableOpacity 
                style={{ position: 'absolute', right: 0 }} 
                onPress={ () => navigation.goBack() }
              >
                <IconEdit name="user-edit" color="gray" />
              </TouchableOpacity>
            </AmountView>
          </CenterContainer>
        </ProfileContainer>
      </NameContainer>
      <Name style={{ marginLeft: 10}}>Meus Livros</Name>
      <MenuProfile>
        <MenuProfilerButton actived={isRead} onPress={ () => handleButton(1) } >
          <MenuProfilerButtonText actived={isRead}>LIDOS</MenuProfilerButtonText>
        </MenuProfilerButton >
        <MenuProfilerButton actived={isNotRead} onPress={ () => handleButton(2) } >
          <MenuProfilerButtonText actived={isNotRead} >À LER</MenuProfilerButtonText>
        </MenuProfilerButton>
        <MenuProfilerButton actived={isRegistered} onPress={ () =>handleButton(3) } >
          <MenuProfilerButtonText actived={isRegistered}>CADASTRADOS</MenuProfilerButtonText>
        </MenuProfilerButton>
      </MenuProfile>
      {
        isRead &&
        <List>
          <FlatList
            data={dataBooks}
            keyExtractor={ item => item.id }
            renderItem={ ({ item }) => (
              <ViewList>
                <Books genre={item.genre} title={item.title} />
                <ViewDone>
                  <Icon name="done" color='white' />
                </ViewDone>
              </ViewList>
            )}
            numColumns={3}
            showsVerticalScrollIndicator={false}
          />
        </List>
      }
      {
        isNotRead &&
        <List>
          <FlatList
            data={dataBooks}
            keyExtractor={ item => item.id }
            renderItem={ ({ item }) => (
              <ViewList>
                <Books genre={item.genre} title={item.title} />
                {
                  item.id % 2 !== 0 &&
                  <ViewBill>
                    <Icon2 name="dollar" color="white" size={15} />
                  </ViewBill>
                }
                <ViewButton>
                  <Button style={{ height: 30 }}>Terminei !</Button>
                </ViewButton>
              </ViewList>
            )}
            numColumns={3}
            showsVerticalScrollIndicator={false}
          />
        </List>
      }
      {
        isRegistered &&
        <List>
          <FlatList
            data={dataBooks}
            keyExtractor={ item => item.id }
            renderItem={ ({ item }) => (
              <ViewList>
                <Books genre={item.genre} title={item.title} />
              </ViewList>
            )}
            numColumns={3}
            showsVerticalScrollIndicator={false}
          />
        </List>
      }
    </Container>
  );
};


export default Profile;