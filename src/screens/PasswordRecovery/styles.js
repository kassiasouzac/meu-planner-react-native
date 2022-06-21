import React from "react";
import styled from "styled-components/native";


export const Container = styled.SafeAreaView`
    background-color: 'rgba(240, 234, 217, 0.74)';
    flex: 1;
    justify-content:  flex-start;
    align-items: center;
`;

export const InputArea = styled.View`
    padding: 35px;
    padding-top: 10px;
    width: 100%;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 50px;
    justify-content: center;
    align-items: center;
`;

export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #FFF;
    font-family: Roboto-Black;
`;

export const InfoText = styled.Text`
    font-size: 16px;
    color: 'rgba(0, 0, 0, 0.6)';
    font-family: Outfit-Regular;
    margin-bottom: 30px;
`;
export const Back = styled.TouchableOpacity`
    align-items:center;
    flex-direction:row;
    justify-content:flex-start;
    padding:15px;
    width:100%;
`;