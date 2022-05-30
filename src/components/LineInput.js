import React from 'react';
import styled from 'styled-components/native';
import { TextInput } from "react-native";

const InputArea = styled.View`
    width: 100%
    height: 60px;
    flex-direction: row;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;

const Input = styled(TextInput)`
    flex: 1;
    font-size: 16px;
    color: #817373;
    margin-left: 10px;
    
`;

const InputBorder = styled.View`
width: 90%;
borderBottomWidth: 2px;
border-color: 'rgba(255, 152, 95, 0.35)';
padding: 0px;
margin: 0px;
`;

export default ({IconSvg, placeholder, value, onChangeText}) => {
    return (
        <InputArea>
            <IconSvg width="24" height="24" fill="#FF985F" />
            <InputBorder>
            <Input
                placeholder={placeholder}
                placeholderTextColor="#A69C9C"
                value={value}
                onChangeText={onChangeText}
            />
            </InputBorder>
        </InputArea>
    );
}