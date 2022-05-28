import React from "react";
import styled from "styled-components/native";


export const Container = styled.SafeAreaView`
    background-color: #D4E9EF;
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

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 60px
`;
    
export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: #E49359;
    font-weight: bold;
`;
