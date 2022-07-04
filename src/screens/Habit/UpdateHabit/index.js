import React, { useState, useEffect} from "react";
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


export default ({navigation, route}) => {

    const habitId = route.params.id;
    const [title, setTitle] = useState('');
    const [motivation, setMotivation] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [categoryField, setCategoryField] = useState('Categoria');
    const [modalCategoryVisible, setModalCategoryVisible] = useState(false);
    const [category, setCategory] = useState();
    const [loading, setLoading] = useState();
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
            setMotivation(route.params.motivation);
        }
        async function loadInfo(){
            const response = await api.get('/categorys');
            setCategory(response.data.category) 
            setLoadingB(false);
            }
        findCategory();
        loadInfo();

    }, [route.params.categoryId],[route.params.title],[route.params.motivation])

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

    async function handleUpdateHabit(){
        if(title === '' || motivation === ''|| categoryId === '' ){
            alert('Preencha os campos!')
            return;
        } 
        setLoading(true);

        const response = await api.put('/habit/edit', {
            habitId,
            title,
            motivation,
            categoryId
        })

        
        setLoading(false);
        navigation.navigate('ListHabits');
    
    }

    return (
        <Container>

            <TitleImage 
            Title="Hábitos" 
            EventSvg={Habit}/>
            
           {loadingB?(<ActivityIndicator size={100} color="#FFF"/>):( <InputArea>

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

</InputArea>)}

            { loading ? (
            <ActivityIndicator size={45} color="#FFF"/>
          ) :(<SmallCustomButton
                onPress={handleUpdateHabit}
                    buttonName="SALVAR"
                ></SmallCustomButton>)}
        </Container>
    )
}
