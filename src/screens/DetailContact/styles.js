import React from "react";
import styled from "styled-components/native";


export const Container = styled.SafeAreaView`
background-color: 'rgba(250, 248, 243, 0.57)';
    flex: 1;
    justify-content:  flex-start;
    align-items: center;
`;
export const Area = styled.View`
    width: 85%
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    margin-top: 20px;
    border-radius: 25px;
    background-color: 'rgba(194, 199, 203, 0.21)';
`;

export const Name = styled.Text`
    font-size: 24px;
    color: 'rgba(166,156,156,0.9)';
    font-family: Outfit-Black;
    margin-bottom: 5px;
    margin-top:5px;
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


export const Circle = styled.View`
    width: 140px;
    height: 140px;
    border-radius: 70px; 
    background-color:#6294B2
    borderWidth: 1px;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`;

export const AreaTitle = styled.View`
width: 100%;
align-items: center;
justify-content: center;
margin-top: 10px;
`;

export const ItemTitle = styled.Text`
    font-size: 18px;
    color: 'rgba(166,156,156,0.9)';
    font-family:Outfit-Medium;
    padding: 10px;
`;


export const Text =  styled.Text`
    font-size: 18px;
    color: 'rgba(166,156,156,0.9)';
    font-family: Outfit-Regular;
    margin-left: 15px;
`;

export const TextArea = styled.TouchableOpacity`
    width: 100%
    flex-direction: row;
    padding-left: 15px;
    justify-content: flex-start;
    align-items: center;
    margin:10px;
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

export const ImageArea = styled.View`
margin-left: 0px;
padding-top:10px;
`;

export const TextTitle = styled.Text`
    font-size: 40px;
    color:#FF985F;
    font-family: Pacifico-Regular;
    padding-right: 20px
`;