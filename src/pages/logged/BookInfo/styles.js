import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background: white;
  justify-content: space-around;
  align-items: center;
  padding: 16px 70px;
`

export const BookImage = styled.Image`
  height: 285px;
  width: 200px;
  border-radius: 5px;
`

export const InfoContainer = styled.View`
  align-self: flex-start;
  height: 150px;
  justify-content: space-between;
`

export const Text = styled.Text`
  margin-bottom: 8px;
  font-size: 18px;
  color: black;
`

export const ButtonContainer = styled.View`
  width: 280px;
`
export const GenresContainer = styled.View`
  margin: 8px 0;
  flex-direction: row;
  align-items: center;
`

export const ChipsListContainer = styled.View`
  width: 200px;
  flex-direction: row;
  flex-wrap: wrap;
`

export const ChipContainer = styled.View`
  margin: 4px;
`

export const OwnerContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const OwnerLabel = styled.View`
  margin-right: 8px;
`
