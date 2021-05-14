import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: white;
    justify-content: flex-end;
    align-items: center;
`;

export const ContainerFloatingButton = styled.View`
    width: 100%;
    background: transparent;
    padding: 20px 20px;
    align-items: flex-end;
    justify-content: center;
    position: absolute;
`;

export const ButtonBook = styled.TouchableOpacity`
    height: 56px;
    width: 56px;
    border-radius: 30px;
    background: #E10050;
    box-shadow: 0 6px 10px rgba(0,0,0, 0.12);
    align-items: center;
    justify-content: center;
`;

export const ViewList = styled.View`
    margin-top: 30px;
    height: 100%;
`;