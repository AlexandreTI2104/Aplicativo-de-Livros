import React from 'react';
import { Bold, Button, ButtonText, Container, Image, SubContainer, Text } from './styles';


const Notification = ({ name, book }) => (
  <Container>
    <SubContainer>
      <Image  />
      <Text>Corrigir questões de <Bold>{name}</Bold> sobre {'\n'} seu livro: <Bold>{book}</Bold></Text>
    </SubContainer>
    <Button>
      <ButtonText>CORRIGIR</ButtonText>
    </Button>
  </Container>
)

export default Notification;