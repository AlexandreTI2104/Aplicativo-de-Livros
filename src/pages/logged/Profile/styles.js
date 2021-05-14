import styled from 'styled-components/native';
import { css } from 'styled-components/native';
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
  background: white;
`;

export const NameContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export const ProfileContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
`;

export const CenterContainer = styled.View`
  height: 65px;
  justify-content: space-between;
  margin-left: 10px;
`;

export const AmountView = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const ProfilePic = styled.View`
  height: 75px;
  width: 75px;
  background: #2196f3;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const ProfilePicInitial = styled.Text`
  color: white;
  font-size: 20px;
`;

export const Name = styled.Text`
  color: black;
  font-weight: 600;
  font-size: 15px;

`;


export const MenuProfile = styled.View`
  margin-top: 20px;
  background: rgba(0,0,0,0.1);
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: space-around;
`;

export const MenuProfilerButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${(width/3) - 10}px;
  ${props => props.actived && css`
    border-bottom-width: 1px;
    border-bottom-color: #2196f3;
  `}
`;

export const MenuProfilerButtonText = styled.Text`
  color: gray;
  font-size: 12px;
  font-weight: bold;

  ${props => props.actived && css`
    color: #2196f3;
  `}
`;

export const List = styled.View`
  flex: 1;
  align-items: center;
`;

export const ViewDone = styled.View`
  height: 15px;
  width: 15px;
  border-radius: 15px;
  background: green;
  position: absolute;
  top: 5px;
  right: 22px;
  align-items: center;
  justify-content: center;
`;

export const ViewBill = styled.View`
  height: 15px;
  width: 15px;
  border-radius: 15px;
  background: orange;
  position: absolute;
  top: 5px;
  right: 22px;
  align-items: center;
  justify-content: center;
`;

export const ViewBill2 = styled.View`
  height: 20px;
  width: 20px;
  border-radius: 15px;
  background: orange;
  align-items: center;
  justify-content: center;
`;

export const ViewButton = styled.View`
  width: 70%;
  align-items: center;
  justify-content: center;
`;