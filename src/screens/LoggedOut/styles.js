import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    background-color: 'rgba(240, 234, 217, 0.74)';
    flex: 1;
    justify-content: center;
    align-items: center;
`;
/* InputArea, CustomButton, CustomButtonText */

export const InputArea = styled.View`
    padding: 40px;
    width: 85%
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    justify-content: center;
    align-items: center;
   
`;

export const CustomButtonLight = styled.TouchableOpacity`
    height: 60px;
    background-color: #FFFFFF;
    border: 2px;
    border-color: #E49359;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
`;

export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #FFF;
`;

export const CustomButtonTextLight = styled.Text`
    font-size: 18px;
    color: #E49359;
`;

