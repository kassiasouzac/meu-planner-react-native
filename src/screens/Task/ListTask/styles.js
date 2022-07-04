import React from "react";
import styled from "styled-components/native";


export const Container = styled.SafeAreaView`
background-color: 'rgba(250, 248, 243, 0.57)';
    flex: 1;
    justify-content:  flex-start;
    align-items: center;
`;
export const ItemArea = styled.TouchableOpacity`
width: 100%
flex-direction: row;
padding-left: 2px;
align-items: center;
justify-content: space-between;
margin-bottom: 5px;

`;

export const ItemTitle = styled.Text`
    font-size: 18px;
    color: 'rgba(166,156,156,0.9)';
    font-family: Roboto-Medium;
    margin-left: 10px;
`;

export const ItemLineArea = styled.View`
width: 100%
flex-direction: row;
padding: 0px;
padding-left:15px;
padding-right:15px;
align-items: center;
margin-top:10px;
margin-bottom:10px;
`;


export const BorderTitle = styled.Text`
font-size: 21px;
color: #FF985F;
font-family: Pacifico-Regular;
margin-bottom: 5px;
margin-top:5px;
align-self:center;
`;

export const AreaButton = styled.View`
width:100%;
flex-direction: row;
justify-content: center;
align-items: center;
padding:0px;
margin-top:0px;
`;

export const Area = styled.View`
align-items: center;
margin-top:25px;
margin-bottom:50px;
`;

export const ItemDescription = styled.Text`
font-size: 18px;
color: 'rgba(166,156,156,0.9)';
font-family: Roboto-Regular;
margin-left: 15px;
`;


export const ItemBorder = styled.View`
width: 100%;
borderTopWidth: 1px;
borderBottomWidth: 1px;
border-color: 'rgba(0, 0, 0, 0.24)';
padding-top: 5px;
padding-bottom:15px;
`;



