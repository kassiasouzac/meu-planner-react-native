import React from "react";
import styled from "styled-components/native";


export const Container = styled.SafeAreaView`
background-color: 'rgba(250, 248, 243, 0.57)';
    flex: 1;
    justify-content:  flex-start;
    align-items: center;
`;

export const InputArea = styled.View`
padding: 15px;
    padding-top: 40px;
    align-items: center;
    width: 100%;
`;

export const List = styled.FlatList``;

export const ModalCategory = styled.Modal``;

export const ModalView = styled.View`
    align-items: center;
    justify-content: center;
    margin: 10px;
`;

export const Modalheader = styled.View`
    flex-direction: row;
    align-items: space-between;
    width: 95%;
    height: 40px;
`;

export const ButtonArea = styled.View`
width: 75%;
justify-content: center;
`;

export const ItemArea = styled.TouchableOpacity`
    width: 100%
    flex-direction: row;
    padding-left: 2px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    
`;
export const Item = styled.Text`
    font-size: 24px;
    color: 'rgba(166,156,156,0.9)';
    font-family: Roboto-Regular;
    width:100%;
`;
export const ItemBorder = styled.View`
    width: 90%;
    borderBottomWidth: 2px;
    border-color: 'rgba(255, 152, 95, 0.8)';
    margin: 0px;

`;





