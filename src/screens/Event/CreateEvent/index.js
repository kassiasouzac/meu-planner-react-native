import React, { useState, useContext } from "react";
import { TextInput } from "react-native";

import TitleImage from '../../../components/TitleImage';
import LineInput from "../../../components/LineInput";
import SmallCustomButton from "../../../components/SmallCustomButton";

import Event from '../../../assets/event.svg';
import IconTitle from '../../../assets/icons/file-lines-solid.svg';
import IconDescription from '../../../assets/icons/text.svg';
import IconCalendar from '../../../assets/icons/calendar.svg';
import IconCategory from '../../../assets/icons/category.svg';
import IconClock from '../../../assets/icons/clock.svg';
import IconMap from '../../../assets/icons/map.svg';




import { Container, InputArea} from './styles'; 


export default () => {

    const [titleField, setTitleField] = useState('');
    const [descriptionField, setDescriptionField] = useState('');
    const [categoryField, setCategoryField] = useState('');
    const [dateField, setDateField] = useState('');
    const [timeField, setTimeField] = useState('');
    const [localizationField, setLocalizationField] = useState('');
    const date = new Date();
    const dateString = date.toLocaleDateString();
  
    return (
        <Container>

            <TitleImage 
            Title="Evento" 
            EventSvg={Event}/>
            
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
                <LineInput
                    IconSvg={IconClock}
                    placeholder="00:00"
                    value={timeField}
                    onChangeText={setTimeField}
                />
                <LineInput
                    IconSvg={IconMap}
                    placeholder="Localização"
                    value={localizationField}
                    onChangeText={setLocalizationField}
                />
               
                <SmallCustomButton
                    buttonName="SALVAR"
                ></SmallCustomButton>
                
            </InputArea>
        </Container>
    )
}