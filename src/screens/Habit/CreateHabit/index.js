import React, { useState, useContext } from "react";

import TitleImage from '../../../components/TitleImage';
import SmallCustomButton from "../../../components/SmallCustomButton";

import Habit from '../../../assets/habits.svg';

import { Container, InputArea, ListArea} from './styles'; 

import { habits } from '../../../files/habitsList';

import SelectMultiple from "../../../components/SelectMultiple";



export default () => {
    
    return (
        <Container>

            <TitleImage 
            Title="Hábitos" 
            EventSvg={Habit}/>
            
            <InputArea>
            <ListArea>
            <SelectMultiple options={habits}/>
            </ListArea>
           
                <SmallCustomButton
                    buttonName="SALVAR"
                ></SmallCustomButton>
                
            </InputArea>
        </Container>
    )
}
