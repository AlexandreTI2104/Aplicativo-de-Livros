import React from 'react';
import { ButtonBook, Container, ContainerFloatingButton } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Feed = () => {
    
    return(
        <Container>
            <ContainerFloatingButton>
                <ButtonBook>
                    <Icon name="book-plus-multiple" size={30} color="#fff" />
                </ButtonBook>
            </ContainerFloatingButton>
        </Container>
    );
}

export default Feed;