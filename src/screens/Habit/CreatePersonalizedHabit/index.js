import React, { useState, useContext } from "react";

import TitleImage from '../../../components/TitleImage';
import SmallCustomButton from "../../../components/SmallCustomButton";
import  LineInput  from '../../../components/LineInput';
import IconBolt from '../../../assets/icons/bolt.svg';
import IconTitle from '../../../assets/icons/file-lines-solid.svg';
import IconCategory from '../../../assets/icons/category.svg';


import Habit from '../../../assets/habits.svg';

import { Container, InputArea} from './styles'; 




export default () => {

    const [titleField, setTitleField] = useState('');
    const [motivationField, setMotivationField] = useState('');
    const [categoryField, setCategoryField] = useState('');
    
    return (
        <Container>

            <TitleImage 
            Title="Hábitos" 
            EventSvg={Habit}/>
            
            <InputArea>

                <LineInput
                IconSvg={IconTitle}
                placeholder="Título"
                value={titleField}
                onChangeText={setTitleField}
                />
                <LineInput
                IconSvg={IconBolt}
                placeholder="Motivação"
                value={motivationField}
                onChangeText={setMotivationField}
                />
                <LineInput
                IconSvg={IconCategory}
                placeholder="Categoria"
                value={categoryField}
                onChangeText={setCategoryField}
                />

                <SmallCustomButton
                    buttonName="SALVAR"
                ></SmallCustomButton>
                
            </InputArea>
        </Container>
    )
}
