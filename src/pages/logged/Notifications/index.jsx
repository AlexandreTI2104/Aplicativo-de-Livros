import React from 'react'
import { FlatList } from 'react-native'
import Notification from '../../../components/Notification'
import { Container } from './styles'
import { fetcher } from '../../../services/api'
import useSWR from 'swr'

const Notifications = () => {
  const { data: borrowRequests, error } = useSWR('/borrow_requests', fetcher)

  return (
    <Container>
      <FlatList
        data={borrowRequests}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Notification book={item.book} name={item.borrower} />
        )}
      />
    </Container>
  )
}

export default Notifications
