import React, { useState, useContext } from "react";

import TitleImage from '../../../components/TitleImage';
import SmallCustomButton from "../../../components/SmallCustomButton";

import Habit from '../../../assets/habits.svg';

import { Container, InputArea} from './styles'; 


export default () => {
  
    return (
        <Container>

            <TitleImage 
            Title="Hábitos" 
            EventSvg={Habit}/>
            
            <InputArea>
            
               
                <SmallCustomButton
                    buttonName="SALVAR"
                ></SmallCustomButton>
                
            </InputArea>
        </Container>
    )
}