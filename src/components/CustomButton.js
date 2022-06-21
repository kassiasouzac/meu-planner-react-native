import React from "react";
import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';

const CustomButton = styled.TouchableOpacity`
    height: 50px;
    justify-content: center;
    align-items: center;
`;

const CustomButtonText = styled.Text`
    font-size: 13px;
    color: #FFF;
    font-family: Roboto-Black;
`;

export default ({buttonName, onPress}) => {
    return (
        <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#ff985f', 'rgba(255, 152, 95, 0.81)']}
        style={{borderRadius: 30, marginTop:70}}
    >
    <CustomButton onPress={onPress}>
        <CustomButtonText>{buttonName}</CustomButtonText>
    </CustomButton>
    </LinearGradient>
    );
}

