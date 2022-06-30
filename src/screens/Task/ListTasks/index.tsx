import React, { useState, useContext, useEffect } from "react";

import { Container, ListArea } from "./styles";
import { api } from "../../../services/api";

import TitleImageList from "../../../components/TitleImageList";
import ListTasks from "../../../components/ListTasks"
import Task from "../../../assets/task.svg";

type TaskProps = {
    id: string,
    title: string,
    description: string,
    date:Date,
    categoryId: string,
}

export default () => {
    const [tasks, setTasks] = useState<TaskProps[] | []>([]);

    useEffect(()=>{
       async function loadInfo(){
            const response = await api.get('/tasks')
            setTasks(response.data.task);
        }
        loadInfo();
    }, [])

    return(
        <Container>
            <TitleImageList
                Title="Suas Tarefas"
                EventSvg={Task}
            />
            <ListArea>
           <ListTasks
           options={tasks}
           />
            </ListArea>
  
        </Container>
    )
}