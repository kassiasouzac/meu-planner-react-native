import React from "react";
import styled from "styled-components/native";


export const Container = styled.SafeAreaView`
    background-color: 'rgba(250, 248, 243, 0.57)';
    flex: 1;
    justify-content:  flex-start;
    align-items: center;
    padding: 0px;
`;
export const TitleArea = styled.View`
    width: 100%
    height: 90px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 5px;
    margin-top: 10px;

`;

export const TextTitle = styled.Text`
    font-size: 40px;
    color:#FF985F;
    font-family: Pacifico-Regular;
    padding-right: 20px
`;

export const ImageArea = styled.View`
margin-left: 0px;
padding-top:10px;
`;

export const ButtonArea = styled.View`
    margin-top: 30px;
    margin-bottom: 15px;
    width: 90%;
`;
export const Flatlist = styled.FlatList`
width: 90%;
borderBottomWidth: 1px;
borderTopWidth: 1px;
border-color:#6294B2;
margin-bottom:40px;

`;

export const LineButton = styled.TouchableOpacity`
flex-direction:row;
width:100%;
align-items:center;
justify-content: flex-start;
margin-top:5px;
padding: 10px;
padding-left: 60px;

`;

export const TextButton = styled.Text`
font-size: 20px;
    color:#6294B2;
    font-family: Outfit-Regular;
    padding-left: 20px;
`;

export const TextContact = styled.Text`
    font-size: 20px;
    color:#A69C9C;
    font-family: Outfit-Regular;
    padding-left: 20px;
    padding-bottom: 5px;
`;


export const Modal = styled.Modal`

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

export const ModalHeader = styled.View`
width: 100%;
flex-direction: row;
background-color: #6294B2;
    align-items: center;
    height: 60px;
    margin-bottom:20px;
`;

export const InputArea = styled.View`
padding: 15px;
    padding-top: 30px;
    align-items: center;
    width: 90%;
`;

export const ModalView = styled.View`
width: 100%;
align-items: center;
justify-content: center;

`;

export const LineContact = styled.TouchableOpacity`
    flex-direction: row;
    margin-top:5px;
    padding: 10px;
    padding-left:60px;
    width:100%;
`;

export const ColumnContact = styled.View`

`;

