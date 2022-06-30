import React, { useState, useContext, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { View } from "react-native";
import { api } from '../../services/api';

import { Container, TextLegend, ImageArea, ListArea, LoadingIcon } from "./style";
import HomeList from "../../components/HomeList";
import HomePlanner from "../../assets/homePlanner.svg";

export default function Home ({navigation}){
    const [todo, setTodo] = useState([]);
    const [event, setEvent] = useState([]);
    const [goal, setGoal] = useState([]);
    const [habit, setHabit] = useState([]);
    const [loading, setLoading] = useState(false);

    async function loadInfo(){
        const response = await api.get('/planning')
        
        setTodo(response.data.planning.tasks);
        setEvent(response.data.planning.events);
        setGoal(response.data.planning.goals);
        setHabit(response.data.planning.habits);
        setLoading(false);
    }

    useEffect(()=> {
       setLoading(true);
        navigation.addListener('focus', async () => {
            loadInfo();
        })
        loadInfo();
        
    }, []) 

    function checkPlanner(){
        if(loading){
            return( <ActivityIndicator size={100} color="#FFF"/>)
        }else{
            if(todo.length >= 1 || event.length >= 1 || goal.length >= 1 || habit.length >= 1 ){
                return(
                    <ListArea>
                        {todo.length > 0 &&
                        <HomeList
                        titleLine="Tarefas"
                        options={todo}
                        screen={'ListTasks'}
                        />
                        }
                            
                        {event.length > 0 &&
                        <HomeList
                        titleLine="Eventos"
                        options={event}
                        screen={'ListEvents'}
                         />
                        }
                        
                        {goal.length > 0 &&
                        <HomeList
                        titleLine="Metas"
                        options={goal}
                        screen={'ListGoals'}
                        />
                        }
                        {habit.length > 0 &&
                          <HomeList
                          titleLine="Hábitos"
                          options={habit}
                          screen={'ListHabits'}
                          />
                        }
                      
                    </ListArea>
                )
            }else{
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
                
            }
        }
        
       
    }

return(
    <Container>
       {checkPlanner()}
       
    </Container>   
)
}