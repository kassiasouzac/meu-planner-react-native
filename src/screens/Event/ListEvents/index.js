import React, { useState, useContext } from "react";

import { Container, ListArea } from "./styles";
import { events } from '../../../files/eventsList';

import TitleImageList from "../../../components/TitleImageList";
import List from "../../../components/List";
import Event from "../../../assets/event.svg";

export default () => {
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