import React from 'react'
import { FlatList } from 'react-native'
import Notification from '../../../components/Notification'
import { Container, LoadingContainer } from './styles'
import { fetcher } from '../../../services/api'
import { ActivityIndicator, Colors } from 'react-native-paper'
import useSWR from 'swr'

const Notifications = () => {
  const { data: borrowRequests, error } = useSWR('/borrow_requests', fetcher)

  return borrowRequests ? (
    <Container>
      <FlatList
        data={borrowRequests}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <>
            <Notification book={item.book} name={item.borrower} />
          </>
        )}
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

export default Notifications
