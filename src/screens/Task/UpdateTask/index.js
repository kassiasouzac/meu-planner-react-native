import React, { useState, useContext, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native";
import DatePicker from 'react-native-date-picker';
import { api } from "../../../services/api";
import { format, parseISO } from 'date-fns';

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


export default ({navigation, route}) => {
    const taskId = route.params.id;
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
    const [loadingB, setLoadingB] = useState(false);

    useEffect(()=> {
        async function findCategory(){
            setLoadingB(true)
            const categoryId =  route.params.categoryId;
            const response = await api.get('/category/detail', {
                params:{
                    categoryId: categoryId
                }
            })
            setCategoryField(response.data[0].title)
            setCategoryId(categoryId);
            setTitle(route.params.title);
            setDescription(route.params.description);
            setDate(parseISO(route.params.date));
            setDateString(route.params.dateString);
            
            setLoadingB(false);
        }
        async function loadInfo(){
            const response = await api.get('/categorys');
            setCategory(response.data.category) 
            }
        findCategory();
        loadInfo();
    }, [route.params.title], [route.params.description], [route.params.categoryId],
    [route.params.date], [route.params.dateString])

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

    async function handleUpdateTask(){
       
        if(title === '' || description === ''|| categoryId === '' || date === null){
            alert('Preencha os campos!')
            return;
        } 
        setLoading(true);

        const response = await api.put('/task/edit', {
            taskId,
            title,
            description,
            date,
            categoryId
        })

        
        navigation.navigate('ListTasks');
   
        setLoading(false);
    }
  
    return (
        <Container>

            <TitleImage 
            Title="Tarefa" 
            EventSvg={Task}/>
            
            { loadingB ? (
            <ActivityIndicator size={45} color="#FFF"/>
          ) :(
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
            </InputArea>

          )}
            
            { loading ? (
            <ActivityIndicator size={45} color="#FFF"/>
          ) :(<SmallCustomButton
                onPress={handleUpdateTask}
                    buttonName="SALVAR"
                ></SmallCustomButton>)}
                
        </Container>
    )
}