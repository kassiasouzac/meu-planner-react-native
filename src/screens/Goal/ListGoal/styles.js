import React from "react";
import styled from "styled-components/native";


export const Container = styled.SafeAreaView`
background-color: 'rgba(250, 248, 243, 0.57)';
    flex: 1;
    justify-content:  flex-start;
    align-items: center;
`;
export const ItemArea = styled.View`
    width: 100%
    flex-direction: row;
    padding-left: 15px;
    padding-right: 15px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    margin-top: 0px;
`;

export const AreaTitle = styled.View`
width: 100%;
flex-direction: row;
align-items: center;
justify-content: center;
margin-top: 25px;
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


export const ItemTitle = styled.Text`
    font-size: 18px;
    color: 'rgba(166,156,156,0.9)';
    font-family: Roboto-Medium;
    margin-left: 10px;
`;

export const ItemLineArea = styled.TouchableOpacity`
    width: 100%
    flex-direction: row;
    padding: 0px;
    align-items: center;
    margin-top:10px;

`;

export const LineArea = styled.View`
    width: 80%
    flex-direction: row;
    justify-content: space-between;
    margin-top:10px;
    padding-left: 0px;
    
`;
export const List = styled.FlatList``;

export const ModalCategory = styled.Modal``;

export const ModalView = styled.View`
    align-items: flex-start;
    justify-content: space-between;
    margin: 10px;
`;
export const Item = styled.Text`
    font-size: 18px;
    color: 'rgba(166,156,156,0.9)';
    font-family: Roboto-Regular;
    margin-left: 20px;
`;
export const StepArea = styled.TouchableOpacity`
    width: 100%
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 15px;
    margin-left: 25px;
    margin-right: 10px;
`;
export const Modalheader = styled.View`
    margin-bottom:20px;
    align-items: flex-start;
    width: 100%;
`;

export const Box = styled.View`
    widht:30%;
    heigth: 50px;
    flex-direction: row;
    justify-content: center;
    padding:0px;
`;

export const InternBox = styled.View`
heigth: 14px;
width: 14px;
justify-content: flex-start;
align-items: center;
`;

export const ItemDescription = styled.Text`
font-size: 18px;
color: 'rgba(166,156,156,0.9)';
margin-left: 15px;
`;

export const BorderTitle = styled.Text`
    font-size: 21px;
    color: #FF985F;
    font-family: Pacifico-Regular;
    margin-bottom: 5px;
    margin-top:5px;
    align-self:center;
`;
export const ItemBorder = styled.View`
    width: 100%;
    border-color: 'rgba(0, 0, 0, 0.24)';
    padding-top: 10px;
    margin-bottom:10px;
`;

export const AreaButton = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding:0px;
    margin-top:60px;
`;

export const OptionRow = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

