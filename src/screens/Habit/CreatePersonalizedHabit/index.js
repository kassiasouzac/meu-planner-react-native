import React, { useState, useEffect} from "react";
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native";
import { AntDesign, Feather} from '@expo/vector-icons';
import { api } from "../../../services/api";

import TitleImage from '../../../components/TitleImage';
import SmallCustomButton from "../../../components/SmallCustomButton";
import LineInput  from '../../../components/LineInput';
import Select from "../../../components/Select";


import IconBolt from '../../../assets/icons/bolt.svg';
import IconTitle from '../../../assets/icons/file-lines-solid.svg';
import IconCategory from '../../../assets/icons/category.svg';
import Habit from '../../../assets/habits.svg';


import { Container, InputArea, List, ModalCategory, ModalView, Modalheader, ItemArea, Item, ItemBorder} from './styles'; 


export default () => {

    const [title, setTitle] = useState('');
    const [motivation, setMotivation] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [categoryField, setCategoryField] = useState('Categoria');
    const [modalCategoryVisible, setModalCategoryVisible] = useState(false);
    const [category, setCategory] = useState();
    const [loading, setLoading] = useState();
    const navigation = useNavigation()
    
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

    async function handleCreateHabit(){
        if(title === '' || motivation === ''|| categoryId === '' ){
            alert('Preencha os campos!')
            return;
        } 
        setLoading(true);

        const get = await api.get('/planning');
        const planningId = get.data.planning.id;

        const response = await api.post('/habit', {
            title,
            motivation,
            planningId,
            categoryId,
        })

        setTitle('');
        setMotivation('');
        setCategoryId('');
        
        setLoading(false);
        navigation.navigate('Home');
    
    }

    return (
        <Container>

            <TitleImage 
            Title="Hábitos" 
            EventSvg={Habit}/>
            
            <InputArea>

                <LineInput
                IconSvg={IconTitle}
                placeholder="Título"
                value={title}
                onChangeText={setTitle}
                />
                <LineInput
                IconSvg={IconBolt}
                placeholder="Motivação"
                value={motivation}
                onChangeText={setMotivation}
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

        { loading ? (
            <ActivityIndicator size={45} color="#FFF"/>
          ) :(<SmallCustomButton
                onPress={handleCreateHabit}
                    buttonName="SALVAR"
                ></SmallCustomButton>)}
                
            </InputArea>
        </Container>
    )
}
