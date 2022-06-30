import React, { useState, useEffect } from "react";

import { Container, ListArea } from "./styles";
import { api } from "../../../services/api";

import TitleImageList from "../../../components/TitleImageList";
import List from "../../../components/ListGoal";
import Goal from "../../../assets/goals.svg";

export default () => {
    const [goals, setGoals] = useState();

    useEffect(()=>{
       async function loadInfo(){
            const response = await api.get('/goals')
            setGoals(response.data.goal);
        }
        loadInfo();
    }, [])

    return(
        <Container>
            <TitleImageList
                Title="Suas Metas"
                EventSvg={Goal}
            />
            
            <ListArea>
            <List
                options={goals}
            />
            </ListArea>
            
           
        </Container>
    )
}