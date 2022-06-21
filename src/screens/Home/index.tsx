import React, { useState, useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { api } from '../../services/api';

import { Container, TextLegend, ImageArea, ListArea } from "./style";
import HomeList from "../../components/HomeList";
import HomePlanner from "../../assets/homePlanner.svg";

type PlannerProps = {
    id:string,
    habits:{
        id: string,
        categoryId: string,
        title: string
    },
    tasks:{
        id: string,
        categoryId: string,
        title: string,
        date: Date
    },
    events:{
        id: string,
        categoryId: string,
        title: string,
        date: Date
    },
    goals:{
        id: string,
        categoryId: string,
        title: string,
        endDate: Date
    }
}

export default function Home (){
    const [planner, setPlanner] = useState<PlannerProps[] | []>([]);
    const [todo, setTodo] = useState([]);
    const [event, setEvent] = useState([]);
    const [goal, setGoal] = useState([]);
    const [habit, setHabit] = useState([]);
    const [selected, setSelected] = useState();
    const navigation = useNavigation();

    useEffect(()=> {
        async function loadInfo(){
            const response = await api.get('/planning')

            setTodo(response.data.planning.tasks);
            setEvent(response.data.planning.events);
            setGoal(response.data.planning.goals);
            setHabit(response.data.planning.habits);
        }

        loadInfo();
        
    }, []) 

    function checkPlanner(){
        if(todo.length === 0 || event.length === 0 || goal.length === 0 || habit.length === 0 ){
            return(
                <View>
                    <TextLegend
                        numberOfLines={4}
                        >Você ainda não possui um planejamento. 
                        {"\n"}
                        Que tal iniciarmos 
                        {"\n"}
                        um?
                    </TextLegend>
                <ImageArea>
                <HomePlanner width="400" height="340" />
                </ImageArea>
                </View>
                )
        }else{
            return(
                <ListArea>
                    {todo.length > 0 &&
                    <HomeList
                    titleLine="Tarefas"
                    options={todo}
                    onPress=''/>
                    }
                        
                    {event.length > 0 &&
                    <HomeList
                    titleLine="Eventos"
                    options={event}
                    onPress='' />
                    }
                    
                    {goal.length > 0 &&
                    <HomeList
                    titleLine="Metas"
                    options={goal}
                    onPress=''/>
                    }
                    {habit.length > 0 &&
                      <HomeList
                      titleLine="Hábitos"
                      options={habit}
                      onPress=''/>
                    }
                  
                </ListArea>
            )
        }
       
    }

return(
    <Container>
       {checkPlanner()}     
               
    </Container>   
)
}