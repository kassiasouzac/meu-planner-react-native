import React from "react";
import styled from "styled-components/native";
import { Item } from "../screens/Goal/UpdateGoal/styles";

const ButtonArea = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin:20px;
    padding-left:20px;
    padding-right: 20px;
`;

const CustomButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

const CustomButtonText = styled.Text`
    font-size: 16px;
    color: #A69C9C;
    font-family: Roboto-Regular;
    margin-top:10px;
`;


export default ({buttonName1, buttonName2, IconSvg1, IconSvg2, onPress1, onPress2}) => {
    return (
        <ButtonArea>
            
            <CustomButton
            onPress={onPress1}
            >
            
            <IconSvg1 width="25" height="25" fill="#FF985F" />
            <CustomButtonText>{buttonName1}</CustomButtonText>
            </CustomButton>
            
    
            
            <CustomButton
             onPress={onPress2}
            >
            
            <IconSvg2 width="25" height="25" fill="rgba(236, 7, 7, 0.84)" />
            <CustomButtonText>{buttonName2}</CustomButtonText>
            </CustomButton>
            
           
        </ButtonArea>
    
   
    );
}

