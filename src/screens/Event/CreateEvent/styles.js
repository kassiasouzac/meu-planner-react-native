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
    padding-top: 30px;
    align-items: center;
    width: 100%;
`;

export const LocationView = styled.View`
width: 100%
padding-left: 15px;
padding-top: 10px;
padding-bottom:15px;
align-items: center;
margin-bottom: 15px;
margin-top:28px
`;

export const ListLocation = styled.View`
width: 90%
padding-left: 3px;
padding-right: 10px;
position: absolute;
z-index: 5;
top: -15px
`;

export const LocationBorder = styled.Text`
width: 95%;
borderBottomWidth: 2px;
border-color: 'rgba(255, 152, 95, 0.35)';
padding: 0px;
margin: 0px;
`;

export const ModalMap = styled.Modal`

`;

export const MapArea = styled.View`
    margin-top: 10px;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
`;
export const ModalCategory = styled.Modal``;

export const ModalRepeat = styled.Modal``;

export const ViewRepeat = styled.View``;

export const List = styled.FlatList``;

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

export const LocalButton = styled.TouchableOpacity`
    height: 50px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const LocalButtonText = styled.Text`
    font-size: 10px;
    color: #FFF;
    font-family: Roboto-Black;
    margin-left:15px;
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

export const RepeatText = styled.Text`
flex: 1;
font-size: 18px;
color: #A69C9C;
padding-left:10px;
`;

export const ItemBorder = styled.View`
    width: 90%;
    borderBottomWidth: 2px;
    border-color: 'rgba(255, 152, 95, 0.8)';
    margin: 0px;

`;





