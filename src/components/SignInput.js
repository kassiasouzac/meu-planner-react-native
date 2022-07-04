import React from 'react';
import styled from 'styled-components/native';
import { TextInput } from "react-native";

const InputArea = styled.View`
    width: 100%
    height: 52px;
    background-color: #FFFFFF;
    flex-direction: row;
    border-radius: 20px;
    border: 2px;
    border-color: #FF985F;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #817373;
    margin-left: 10px;
`;

export default ({placeholder, value, onChangeText, password}) => {
    return(
        <InputArea>
            <Input
            placeholder={placeholder}
            placeholderTextColor="#817373"
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={password}
            />
        </InputArea>
    );
}