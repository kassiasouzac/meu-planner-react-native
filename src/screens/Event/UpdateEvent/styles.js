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

export const ViewRepeat = styled.View`
    width:70%;
    align-self: center;
    top:220px;
    background-color: #FFFFFF;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const List = styled.FlatList``;

export const ModalView = styled.View`
    align-items: center;
    justify-content: center;
    margin: 10px;
`;

export const CloseButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width:22px;
    height: 22px;
    margin-right: 10px;
    margin-bottom: 10px;
    top: 10px;
    padding: 0px;
`;

export const Modalheader = styled.View`
    flex-direction: row;
    align-items: space-between;
    width: 100%;
    margin-bottom:20px;
`;


export const LocationView = styled.View`
width: 100%
height: 10%
padding-bottom:5px;
align-items: center;
margin-bottom: 0px;
`;

export const ListLocation = styled.View`
width: 100%
padding-left: 3px;
padding-right: 10px;
position: absolute;
z-index: 5555;
top: 15px
`;


export const Transparent = styled.View`
    flex: 1;
    background-color:'rgba(2, 2, 2, 0.54)'; 
`;

export const ModalHeaderRepeat = styled.View`
    background-color: #6294B2;
    align-items: flex-end;
    width: 100%;
    height: 40px;
    margin-bottom:20px;
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

export const AreaListFrequency = styled.View`
    width:45%;
    justify-content:center;
    align-items: center;
    padding-left:20px;
`;

export const ItemAreaFrequency = styled.TouchableOpacity`
    width: 100%
    flex-direction: row;
    padding-left: 2px;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
`;

export const Item = styled.Text`
    font-size: 24px;
    color: 'rgba(166,156,156,0.9)';
    font-family: Roboto-Regular;
    width:100%;
`;

export const ItemFrequency = styled.Text`
    font-size: 20px;
    color: 'rgba(166,156,156,0.9)';
    font-family: Roboto-Regular;
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





