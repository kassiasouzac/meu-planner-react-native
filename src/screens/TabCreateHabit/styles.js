import React from "react";
import styled from "styled-components/native";


export const Container = styled.SafeAreaView`
    background-color: 'rgba(250, 248, 243, 0.57)';
    flex: 1;
`;

export const ImageArea = styled.View`
   margin-top:140px;
   margin-left:-165px;
    opacity: 0.1;
    padding:0px;
`;

export const Transparent = styled.View`
    flex: 1;
    background-color:'rgba(2, 2, 2, 0.54)';
    
`;

export const ModalCreate = styled.Modal`
`;

export const ModalArea = styled.View`
background-color:'rgba(2, 2, 2, 0.54)';
margin-top:550px;
`;

export const ListArea = styled.View`
position:absolute;
flex-direction:row;
bottom: 270px;
left:26%;
`;
export const PersonalizedArea = styled.View`
position:absolute;
flex-direction:row;
bottom: 210px;
left:26%;
`;
export const HabitArea = styled.View`
position:absolute;
flex-direction:row;
bottom: 330px;
left:6%;
`;

export const ButtonsColumn = styled.View``;

export const WhiteText = styled.Text`
font-family: Pacifico-Regular;
color: #FFFFFF;
font-size:25px;
padding-left:15px;
`;
export const WhiteTextSmall = styled.Text`
font-family: Pacifico-Regular;
color: #FFFFFF;
font-size:18px;
padding-left:15px;
`;