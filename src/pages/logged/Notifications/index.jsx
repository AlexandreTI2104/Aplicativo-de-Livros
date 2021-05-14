import React from 'react';
import { FlatList } from 'react-native';
import NotificationNotification from '../../../components/Notification';
import { Container } from './styles';

const Notifications = () => {
  const data = [
    {
      id: 1,
      name: 'Paula Amorim',
      book: 'Quincas Borba',
    },
    {
      id: 2,
      name: 'Carlos Souza',
      book: 'Memórias Postumas de Brás Cubas',
    },
    {
      id: 3,
      name: 'Gustavo Medes',
      book: 'O cortiço',
    },
  ]
  return (

    <Container>
    <FlatList
      data={data}
      keyExtractor={ item => item.id }
      renderItem={ ({ item }) => (
        <NotificationNotification book={item.book} name={item.name} />
      )}
      />
  </Container>
  );
}

export default Notifications;