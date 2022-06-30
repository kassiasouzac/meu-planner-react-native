import React, { useState, useEffect } from "react";

import { Container, ListArea } from "./styles";
import { api } from "../../../services/api";

import TitleImageList from "../../../components/TitleImageList";
import List from "../../../components/ListHabits";
import Habit from "../../../assets/habits.svg";

export default () => {
    const [habits, setHabits] = useState();

    useEffect(()=>{
       async function loadInfo(){
            const response = await api.get('/habits')
            setHabits(response.data.habit);
        }
        loadInfo();
    }, [])

    return(
        <Container>
            <TitleImageList
                Title="Seus Hábitos"
                EventSvg={Habit}
            />
            
            <ListArea>
            <List
                options={habits}
            />
            </ListArea>
            
           
        </Container>
    )
}