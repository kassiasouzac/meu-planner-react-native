import React, { useState, useEffect } from "react";
import { api } from '../../../services/api';
import { ActivityIndicator } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Container, InputArea, ListArea} from './styles'; 

import TitleImage from '../../../components/TitleImage';
import SmallCustomButton from "../../../components/SmallCustomButton";
import SelectMultiple from "../../../components/SelectMultiple";

import Habit from '../../../assets/habits.svg';

export default () => {
    const [habitsList, setHabitsList] = useState({});
    const [loading, setLoading] = useState(false);
    const [loadingB, setLoadingB] = useState(false);
    const [data, setData] = useState();
    const navigation = useNavigation();
    const [status, setStatus] = useState();

    useEffect(()=> {
        setLoading(true);
        async function loadHabits(){
            const response = await api.get('/habitsList');
            setHabitsList(response.data.habitList);
            setLoading(false);
        }
    loadHabits();
    }, [])

    function receiveData(selected){
        setData(selected);
    }

    async function prepareData(){
        
        if(!data){
            alert('Selecione pelo menos um hábito!')
            return;
        } 
        setLoadingB(true);
        
        await data.forEach(function(json){
          handleCreateHabit(json.title, json.motivation, json.categoryId);
        });
        setLoadingB(false);
        navigation.navigate('Home');
        }

    async function handleCreateHabit(title, motivation, categoryId){
        
        const get = await api.get('/planning');
        const planningId = get.data.planning.id;

       try{
        const response = await api.post('/habit', {
            title,
            motivation,
            categoryId,
            planningId
        })
       }catch(err){
        throw new Error(err);
       }
        
    }
    
    return (
        <Container>

            <TitleImage 
            Title="Hábitos" 
            EventSvg={Habit}/>
            
            {loading?(<ActivityIndicator size={95} color="#FFF"/>):(<InputArea>
            <ListArea>
            <SelectMultiple 
            options={habitsList}
            receiveData={receiveData}
            />
            </ListArea>
           
            {loadingB?(<ActivityIndicator size={55} color="#FFF"/>):
            (<SmallCustomButton
                    buttonName="SALVAR"
                    onPress={prepareData}
                ></SmallCustomButton>)}
            
                
            </InputArea>)}
        </Container>
    )
}
