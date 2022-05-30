import React, { useState, useContext } from "react";

import TitleImage from '../../../components/TitleImage';
import LineInput from "../../../components/LineInput";
import SmallCustomButton from "../../../components/SmallCustomButton";

import Task from '../../../assets/task.svg';
import IconTitle from '../../../assets/icons/file-lines-solid.svg';
import IconDescription from '../../../assets/icons/text.svg';
import IconCalendar from '../../../assets/icons/calendar.svg';
import IconCategory from '../../../assets/icons/category.svg';


import { Container, InputArea} from './styles'; 


export default () => {

    const [titleField, setTitleField] = useState('');
    const [descriptionField, setDescriptionField] = useState('');
    const [categoryField, setCategoryField] = useState('');
    const [dateField, setDateField] = useState('');

    const date = new Date();
    const dateString = date.toLocaleDateString();
  
    return (
        <Container>

            <TitleImage 
            Title="Tarefa" 
            EventSvg={Task}/>
            
            <InputArea>
            <LineInput
                    IconSvg={IconTitle}
                    placeholder="Título"
                    value={titleField}
                    onChangeText={setTitleField}
                />
                <LineInput
                    IconSvg={IconDescription}
                    placeholder="Descrição"
                    value={descriptionField}
                    onChangeText={setDescriptionField}
                />
                <LineInput
                    IconSvg={IconCategory}
                    placeholder="Categoria"
                    value={categoryField}
                    onChangeText={setCategoryField}
                />
                <LineInput
                    IconSvg={IconCalendar}
                    placeholder={dateString}
                    value={dateField}
                    onChangeText={setDateField}
                />
               
                <SmallCustomButton
                    buttonName="SALVAR"
                ></SmallCustomButton>
                
            </InputArea>
        </Container>
    )
}