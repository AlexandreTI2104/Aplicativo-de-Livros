import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background: white;
  justify-content: space-around;
  align-items: center;
  padding: 16px 50px;
`

export const BookImageContainer = styled.View`
  height: 285px;
  width: 200px;
  border-radius: 10px;
  overflow: hidden;
  elevation: 16;
`

export const Bold1 = styled.Text`
  font-weight: bold;
  font-size: 22px;
  color: rgba(0, 0, 0, 0.8);
`
export const Bold2 = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.6);
`

export const BookImage = styled.Image`
  flex: 1;
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
  width: 100%;
`
export const GenresContainer = styled.View`
  margin: 8px 0;
  flex-direction: row;
  align-items: center;
`

export const ChipsListContainer = styled.View`
  width: 240px;
  max-height: 80px;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
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
