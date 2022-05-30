import React, { useState, useContext } from "react";

import TitleImage from '../../../components/TitleImage';
import LineInput from "../../../components/LineInput";
import SmallCustomButton from "../../../components/SmallCustomButton";

import Goals from '../../../assets/goals.svg';
import IconTitle from '../../../assets/icons/file-lines-solid.svg';
import IconDescription from '../../../assets/icons/text.svg';
import IconCalendar from '../../../assets/icons/calendar.svg';
import IconCategory from '../../../assets/icons/category.svg';


import { Container, InputArea} from './styles'; 


export default () => {

    const [titleField, setTitleField] = useState('');
    const [descriptionField, setDescriptionField] = useState('');
    const [categoryField, setCategoryField] = useState('');
    const [startDateField, setStartDateField] = useState('');
    const [endDateField, setEndDateField] = useState('');

    /*const date = new Date();
    const dateString = date.toLocaleDateString();*/
  
    return (
        <Container>

            <TitleImage 
            Title="Meta" 
            EventSvg={Goals}/>
            
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
                    placeholder="De"
                    value={startDateField}
                    onChangeText={setStartDateField}
                />
                <LineInput
                    IconSvg={IconCalendar}
                    placeholder="Até"
                    value={endDateField}
                    onChangeText={setEndDateField}
                />
               
                <SmallCustomButton
                    buttonName="SALVAR"
                ></SmallCustomButton>
                
            </InputArea>
        </Container>
    )
}