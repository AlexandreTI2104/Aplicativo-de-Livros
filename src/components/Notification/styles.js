import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  margin-top: 30px;
  align-items: flex-end;
  padding: 20px 20px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
`

export const SubContainer = styled.View`
  flex-direction: row;
  flex: 1;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`

export const Text = styled.Text``

export const Bold = styled.Text`
  font-weight: bold;
  color: rgba(0, 0, 0, 0.7);
`

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.Text`
  color: #2196f3;
`
