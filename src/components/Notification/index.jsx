import React from 'react'
import { Avatar } from 'react-native-paper'
import {
  Bold,
  Button,
  ButtonText,
  Container,
  SubContainer,
  Text,
} from './styles'

const Notification = ({ name, book }) => (
  <Container>
    <SubContainer>
      <Avatar.Text size={50} label={name[0]} />
      <Text>
        <Bold>{name}</Bold> está interessado em seu {'\n'}livro{' '}
        <Bold>{book}</Bold>
      </Text>
    </SubContainer>
    <Button>
      <ButtonText>VER</ButtonText>
    </Button>
  </Container>
)

export default Notification
