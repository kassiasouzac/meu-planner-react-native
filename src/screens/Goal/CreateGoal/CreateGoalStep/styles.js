import React from "react";
import  { TextInput } from "react-native"
import styled from "styled-components/native";


export const Container = styled.SafeAreaView`
    background-color: 'rgba(249, 248, 248, 0.74)';
    flex: 1;
    justify-content:  center;
    align-items: center;
`;

export const InputArea = styled.View`
    padding: 0px;
    padding-top: 5px;
    padding-right: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex:1;

`;

export const TitleArea = styled.View`
    width: 100%
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 0px;
`;

export const TextTitle = styled.Text`
    font-size: 26px;
    color:#FF985F;
    font-family: Pacifico-Regular;
    padding-right: 30px
`;

export const PlusButton = styled.TouchableOpacity`
    margin-top: 0px; 
    margin-bottom: 8px;
`;

export const SmallText =  styled.Text`
    font-family: Roboto-Regular;
    font-size: 16px;
    color: #A69C9C;
    text-align: center;
`;

export const ScrollArea = styled.ScrollView`
width:100%
height: 100px;
`;

export const LineInputArea = styled.View`
    width: 100%
    height: 60px;
    flex-direction: row;
    padding-left: 10px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`;

export const InputLine = styled(TextInput)`
flex: 1;
font-size: 18px;
color: #817373;
padding: 0px;
margin-bottom:-10px;
`;

export const InputBorder = styled.View`
width: 80%;
borderBottomWidth: 2px;
border-color: 'rgba(255, 152, 95, 0.35)';
padding: 0px;
margin: 0px;
`;

export const ButtonArea = styled.View`
width: 100%;
align-items:center;
justify-content:center;
margin-bottom: 45px;
padding-top:15px;
padding-bottom:0px;
`;




