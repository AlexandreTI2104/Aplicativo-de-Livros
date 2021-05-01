import React from 'react';
import { ButtonBook, Container, ContainerFloatingButton, ViewList } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Books } from '../../components/Books';
import { FlatList } from 'react-native';

const Feed = () => {
    const data = [
        {
            id: 1,
            title: 'Título',
            genre: 'Gênero',
        },
        {
            id: 2,
            title: 'Título',
            genre: 'Gênero',
        },
        {
            id: 3,
            title: 'Título',
            genre: 'Gênero',
        },
        {
            id: 4,
            title: 'Título',
            genre: 'Gênero',
        },
        {
            id: 5,
            title: 'Título',
            genre: 'Gênero',
        },
        {
            id: 6,
            title: 'Título',
            genre: 'Gênero',
        },
        {
            id: 7,
            title: 'Título',
            genre: 'Gênero',
        },
        {
            id: 8,
            title: 'Título',
            genre: 'Gênero',
        },
        {
            id: 9,
            title: 'Título',
            genre: 'Gênero',
        },
        {
            id: 10,
            title: 'Título',
            genre: 'Gênero',
        },
        {
            id: 11,
            title: 'Título',
            genre: 'Gênero',
        },
        {
            id: 12,
            title: 'Título',
            genre: 'Gênero',
        },
    ]
    return(
        <Container>
            <FlatList
                keyExtractor={item => item.id}
                data={data}
                renderItem={ ({ item }) => (
                    <ViewList>
                        <Books title={item.title} genre={item.genre} />
                    </ViewList>
                )}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                style={{ height: "100%"}}
                />
            <ContainerFloatingButton style={{ elevation: 0}}>
                <ButtonBook>
                    <Icon name="book-plus-multiple" size={30} color="#fff" />
                </ButtonBook>
            </ContainerFloatingButton>
        </Container>
    );
}

export default Feed;