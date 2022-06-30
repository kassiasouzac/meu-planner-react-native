import React, { useState, useEffect } from "react";
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

import Goals from '../../../assets/goals.svg';
import IconTitle from '../../../assets/icons/file-lines-solid.svg';
import IconDescription from '../../../assets/icons/text.svg';
import IconCalendar from '../../../assets/icons/calendar.svg';
import IconCategory from '../../../assets/icons/category.svg';
import { AntDesign, Feather} from '@expo/vector-icons';


import { Container, InputArea, ModalCategory, 
    ModalView, Modalheader, List, Item, ItemArea, ItemBorder} from './styles'; 


export default ({navigation, route}) => {
    const goalId = route.params.id;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [categoryField, setCategoryField] = useState('Categoria');
    const [category, setCategory] = useState();
    const [openStart, setOpenStart] = useState(false);
    const [openEnd, setOpenEnd] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [startDateString, setStartDateString] = useState('De');
    const [endDate, setEndDate] = useState(new Date());
    const [endDateString, setEndDateString] = useState('Até');
    const [modalCategoryVisible, setModalCategoryVisible] = useState(false);
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
            setStartDate(parseISO(route.params.startDate));
            setStartDateString(route.params.startDateString);
            setEndDate(parseISO(route.params.endDate));
            setEndDateString(route.params.endDateString);
            setLoadingB(false);
        }
        async function loadInfo(){
            const response = await api.get('/categorys');
            setCategory(response.data.category) 
            }
    findCategory();
    loadInfo();
    }, [route.params.title], [route.params.description], [route.params.categoryId],
    [route.params.startDate], [route.params.endDate], [route.params.endDateString], 
    [route.params.startDateString])

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

    async function handleUpdate(){
        if(title === '' || description === ''|| categoryId === '' || startDate === null || endDate === null){
            alert('Preencha os campos!')
            return;
        } 
        setLoading(true);

        const response = await api.put('/goal/edit',{
            goalId,
            title,
            description,
            categoryId,
            startDate,
            endDate
        })
    
        navigation.navigate('ListGoals');
        setLoading(false);
    }
  
    return (
        <Container>

            <TitleImage 
            Title="Meta" 
            EventSvg={Goals}/>
            {loadingB?(<ActivityIndicator size={100} color="#FFF"/>):(
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
                
                <TouchableOpacity onPress={() => setOpenStart(true)}>
                 <InputDate
                    IconSvg={IconCalendar}
                    value={startDateString}
                />
                 </TouchableOpacity>
                
                <DatePicker
                    modal
                    open={openStart}
                    date={startDate}
                    mode="date"
                    minimumDate={new Date()}
                    onConfirm={(date) => {
                        setOpenStart(false)
                        setStartDate(date)
                        setStartDateString(format(date,"dd/MM/yyyy"))
                    }}
                    onCancel={()=>{
                        setOpenStart(false)
                    }}
                />
                <TouchableOpacity onPress={() => setOpenEnd(true)}>
                 <InputDate
                    IconSvg={IconCalendar}
                    value={endDateString}
                />
                 </TouchableOpacity>
                
                <DatePicker
                    modal
                    open={openEnd}
                    date={endDate}
                    mode="date"
                    minimumDate={new Date()}
                    onConfirm={(date) => {
                        setOpenEnd(false)
                        setEndDate(date)
                        setEndDateString(format(date,"dd/MM/yyyy"))
                    }}
                    onCancel={()=>{
                        setOpen(false)
                    }}
                />
               
               { loading ? (
            <ActivityIndicator size={45} color="#FFF"/>
          ) :(<SmallCustomButton
                onPress={handleUpdate}
                    buttonName="SALVAR"
                ></SmallCustomButton>)}
                
            </InputArea>)}
            
        </Container>
    )
}