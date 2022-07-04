import React from 'react';
import styled from 'styled-components/native';


const InputArea = styled.View`
    width: 100%
    height: 50px;
    flex-direction: row;
    padding-left: 15px;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 2px;
`;

const Input = styled.Text`
    flex: 1;
    font-size: 18px;
    color: #A69C9C;
`;

const InputBorder = styled.View`
width: 90%;
flex-direction:row;
justify-content: center;
borderBottomWidth: 2px;
border-color: 'rgba(255, 152, 95, 0.35)';
margin-left: 20px;

`;

export default ({IconSvg, value}) => {
    return (
        <InputArea>
            <IconSvg width="24" height="24" fill="#FF985F" />
            <InputBorder>
            <Input>
            {value}
            </Input>
            </InputBorder>
        </InputArea>
    );
}