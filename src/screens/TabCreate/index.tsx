import React, { useState, useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, ImageArea, Transparent, WhiteText, EventArea, TaskArea, GoalArea, HabitArea, ButtonsColumn} from "./styles";
import HomePlanner from "../../assets/homePlanner.svg";
import RoundCreateButton from "../../components/RoundCreateButton";


export default () => {
    const [visible, setVisible] = useState(false);
    const navigation = useNavigation();


    return(
        <Container>
           
           <Transparent>
           <ImageArea>
                <HomePlanner width="700" height="640" />
            </ImageArea>
            <ButtonsColumn>
            <EventArea>
            <RoundCreateButton
            onPress={()=> navigation.navigate('CreateEvent')}
            />
            <WhiteText>Criar Evento</WhiteText>
            </EventArea>
            <TaskArea>
            <RoundCreateButton
            onPress={()=> navigation.navigate('CreateTask')}
            />
            <WhiteText>Criar Tarefa</WhiteText>
            </TaskArea>
           
            <GoalArea>
            <RoundCreateButton
            onPress={()=> navigation.navigate('CreateGoal')}
            />
            <WhiteText>Criar Meta</WhiteText>
            </GoalArea>
            
            <HabitArea>
            <RoundCreateButton
            onPress={()=> navigation.navigate('TabCreateHabit')}
            />
            <WhiteText>Criar Hábito</WhiteText>
            </HabitArea>
            </ButtonsColumn>
            
           </Transparent>
        </Container>
    )
}