import styled from 'styled-components/native'
import { css } from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  height: 45px;
  width: 100%;
  background: #2196f3;
  ${(props) =>
    props.isDisabled &&
    css`
      background: #c1c1c1;
    `}
  align-items: center;
  justify-content: center;

  border-radius: 25px;
`

export const ButtonText = styled.Text`
  color: white;
`
