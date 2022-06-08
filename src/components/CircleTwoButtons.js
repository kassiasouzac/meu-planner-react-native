import React from "react";
import styled from "styled-components/native";

const ButtonArea = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const CustomButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

const CustomButtonText = styled.Text`
    font-size: 13px;
    color: #FFF;
    font-family: Roboto-Black;
`;

export default ({buttonName1, buttonName2, IconSvg1, IconSvg2}) => {
    return (
        <ButtonArea>
            <CustomButton>
            <IconSvg1 width="30" height="30" fill="#FF985F" />
            </CustomButton>
    
            <CustomButton>
            <IconSvg2 width="30" height="30" fill="#FF985F" />
            </CustomButton>
        </ButtonArea>
    
   
    );
}

