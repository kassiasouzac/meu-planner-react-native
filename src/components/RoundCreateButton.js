import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons'; 

const RoundButton = styled.TouchableOpacity`
width: 50px;
height: 50px;
border-radius:25px;
align-items:center;
justify-content:center;
`;

export default ({onPress}) => {
    return(
        <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['rgba(255,152,95,1)', 'rgba(234,147,113,1)','rgba(137,171,203,1)']}
        style={{borderRadius: 25, width:50, height:50}}
        >
            <RoundButton onPress={onPress}>
            <AntDesign name="plus" size={24} color="#F0F6FA" />
            </RoundButton>
        </LinearGradient>
    )
}