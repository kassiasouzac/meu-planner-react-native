import React, { useState, useEffect } from "react";

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
            console.log(response.data.event);
            setEvents(response.data.event);
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