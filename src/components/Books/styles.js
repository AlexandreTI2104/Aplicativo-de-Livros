import { setStatusBarStyle } from 'expo-status-bar'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: 105px;
  height: 210px;
  margin: 10px;
  margin-bottom: 40px;
`

export const BookImageContainer = styled.View`
  height: 150px;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 10px;
  overflow: hidden;
`

export const BookImage = styled.Image`
  flex: 1;
`

export const Title = styled.Text`
  font-weight: bold;
  margin-bottom: 3px;
  margin-left: 4px;
`

export const Genre = styled.Text`
  color: gray;
  margin-left: 4px;
`

export const IconContainer = styled.View`
  position: absolute;
  top: 6px;
  right: 6px;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  border-radius: 20px;
  background-color: #ffa000;
  border: 2px solid white;
`
