import React from "react";
import styled from "styled-components/native";


export const Container = styled.SafeAreaView`
    background-color: 'rgba(250, 248, 243, 0.57)';
    flex: 1;
    justify-content:  flex-start;
    align-items: center;
    padding: 0px;
`;

export const HeaderArea =styled.View`
    width: 100%
    background-color: #6294B2;
    flex: 1;
`;

export const View = styled.View`
width:100%;
height: 100%;
align-items:center;
justify-content: flex-start;
background-color: #FAF8F3;
borderTopLeftRadius: 80px;
position: absolute;
top: 140px;

`;

export const Circle = styled.View`

    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    margin-top:5px;
    align-self: flex-end
    margin-right: 10px;
`;

export const InputArea = styled.View`
    width:80%;
    margin-top: 30px;
    align-items: center;
    justify-content: center;

`;

export const Input = styled.Text`
    flex: 1;
    font-size: 22px;
    color: #827F7D;
    font-family: Outfit-Regular;

`;

export const InputBorder = styled.View`
width: 90%;
flex-direction:row;
justify-content: center;
borderBottomWidth: 2px;
border-color: 'rgba(255, 152, 95, 0.35)';
margin-left: 20px;

`;

export const Line = styled.View`
    width: 100%
    height: 50px;
    flex-direction: row;
    padding-left: 15px;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 2px;
`;
export const PlusButton = styled.TouchableOpacity`
    margin-bottom: 5px;
    align-items: center;
    width: 80%;
    justify-content: center;
    flex-direction: row;
    borderWidth: 1px;
    border-color: #FF985F;
    border-radius: 30px;
    padding: 10px;
    margin-top: 20px;

`;

export const SmallText =  styled.Text`
   
    font-size: 16px;
    color: #FF985F;
    font-family: Roboto-Black;
    text-align: center;
    margin-left: 15px;
`;

export const ButtonArea = styled.View`
width: 100%;
justify-content: center;
align-items: center;
margin-top:40px;
`;