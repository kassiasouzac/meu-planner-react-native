import React, { useState, useContext, useEffect } from "react";

import { Container, ListArea } from "./styles";
import { api } from "../../../services/api";

import TitleImageList from "../../../components/TitleImageList";
import List from "../../../components/List";
import Event from "../../../assets/event.svg";

export default () => {
    const [events, setEvents] = useState();

    useEffect(()=>{
       async function loadInfo(){
            const response = await api.get('/events')
            setEvents(response.data);
        }
        loadInfo();
    }, [])

    return(
        <Container>
            <TitleImageList
                Title="Seus Eventos"
                EventSvg={Event}
            />
            
            <ListArea>
            <List
                options={events}
            />
            </ListArea>
            
           
        </Container>
    )
}