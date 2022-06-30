import React, { useState, useContext, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native";
import DatePicker from 'react-native-date-picker';
import { api } from "../../../services/api";
import { format } from 'date-fns';

import TitleImage from '../../../components/TitleImage';
import LineInput from "../../../components/LineInput";
import SmallCustomButton from "../../../components/SmallCustomButton";
import InputDate from "../../../components/InputDate";
import Select from "../../../components/Select";
import { AntDesign, Feather} from '@expo/vector-icons';

import Task from '../../../assets/task.svg';
import IconTitle from '../../../assets/icons/file-lines-solid.svg';
import IconDescription from '../../../assets/icons/text.svg';
import IconCalendar from '../../../assets/icons/calendar.svg';
import IconCategory from '../../../assets/icons/category.svg';


import { Container, InputArea, List, ModalCategory, ModalView, Modalheader, ItemArea, Item, ItemBorder} from './styles'; 


export default () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [categoryField, setCategoryField] = useState('Categoria');
    const [category, setCategory] = useState();
    const [date, setDate] = useState(new Date());
    const [dateString, setDateString] = useState(format(date,"dd/MM/yyyy"));
    const [modalCategoryVisible, setModalCategoryVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    useEffect(()=> {
        async function loadInfo(){
            const response = await api.get('/categorys');
            setCategory(response.data.category) 
            }
    loadInfo();
    }, [])

    function renderOption(item){
        return( 
            <ItemArea onPress={() => {
                setCategoryId(item.id);
                setModalCategoryVisible(false);
                setCategoryField(item.title);
            }}
            >
               {categoryId === item.id && (
                <AntDesign name="checksquare" size={24} color="#6294B2"  />
            )}
            {categoryId !== item.id && (
                <Feather name="square" size={24} color="rgba(255, 152, 95, 0.8)" />
            )}
                <ItemBorder>
                    <Item>{item.title}</Item>
                </ItemBorder>
            </ItemArea> 
        )
    }

    async function handleCreateTask(){
       
        if(title === '' || description === ''|| categoryId === '' || date === null){
            alert('Preencha os campos!')
            return;
        } 
        setLoading(true);

        const get = await api.get('/planning');
        const planningId = get.data.planning.id;

        const response = await api.post('/task', {
            title,
            description,
            date,
            planningId,
            categoryId,
        })

        setTitle('');
        setDescription('');
        setCategoryId('');
        setCategoryField('Categoria');
        setDate(new Date());
        setDateString(format(date,"dd/MM/yyyy"));
        navigation.navigate('Home');
   
        setLoading(false);
    }
  
    return (
        <Container>

            <TitleImage 
            Title="Tarefa" 
            EventSvg={Task}/>
            
            <InputArea>
            <LineInput
                    IconSvg={IconTitle}
                    placeholder="Título"
                    value={title}
                    onChangeText={setTitle}
                />
                <LineInput
                    IconSvg={IconDescription}
                    placeholder="Descrição"
                    value={description}
                    onChangeText={setDescription}
                />
                <TouchableOpacity onPress={() => setModalCategoryVisible(true)}>
                 <Select
                    IconSvg={IconCategory}
                    value={categoryField}
                />
                 </TouchableOpacity>

                 <ModalCategory
                    animationType="slide"
                    visible={modalCategoryVisible}
                    onRequestClose={()=> {
                    setModalCategoryVisible(false)
                    }}
                >
            <Modalheader>
                <AntDesign.Button backgroundColor="#ffffff" name="close" size={20} color="#ff985f" onPress={() => setModalCategoryVisible(!modalCategoryVisible)} />
             </Modalheader>
                <ModalView>
                    <List
                    data={category}
                    keyExtractor={(item) => (item.id)}
                    renderItem={({item}) => renderOption(item)}
                    />
                </ModalView>
        </ModalCategory>
                <TouchableOpacity onPress={() => setOpen(true)}>
                 <InputDate
                    IconSvg={IconCalendar}
                    value={dateString}
                />
                 </TouchableOpacity>
                
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    mode="date"
                    minimumDate={new Date()}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                        setDateString(format(date,"dd/MM/yyyy"))
                    }}
                    onCancel={()=>{
                        setOpen(false)
                    }}
                />
               
               { loading ? (
            <ActivityIndicator size={45} color="#FFF"/>
          ) :(<SmallCustomButton
                onPress={handleCreateTask}
                    buttonName="SALVAR"
                ></SmallCustomButton>)}
                
            </InputArea>
        </Container>
    )
}