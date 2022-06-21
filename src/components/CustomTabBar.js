import React from "react";
import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';

import Home from "../assets/icons/home.svg";
import Todo from "../assets/icons/todo.svg";
import Calendar from "../assets/icons/calendar.svg";
import Profile from "../assets/icons/user.svg";
//import Plus from "../assets/icons/plus.svg";
import Plus from "../assets/icons/plus.svg";

const TabArea = styled.View`
height:60px;
background-color:#6294B2;
flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
flex:1;
justify-content:center;
align-items:center
`;

const TabItemCenter = styled.TouchableOpacity`
width: 70px;
height: 70px;
border-radius:35px;
justify-content:center;
align-items:center;
`;


export default({state, navigation})=>{

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return(
        <TabArea>
            <TabItem onPress={()=>goTo('Home')}>
                <Home width="24" height="24" fill="#FF985F" style={{opacity: state.index===0 ? 1 : 0.9}} />
            </TabItem>
            <TabItem onPress={()=>goTo('ListTasks')}>
                <Todo width="24" height="24" fill="#FF985F" style={{opacity: state.index===1 ? 1 : 0.9}}/>
            </TabItem>
            <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                colors={['rgba(255,152,95,1)', 'rgba(234,147,113,1)','rgba(137,171,203,1)']}
                style={{borderRadius:40, width:80, height:80, marginTop:-30, alignItems:'center', justifyContent:'center'}}
                >
                <TabItemCenter onPress={()=>goTo('Create')}>
                    <Plus width="34" height="34" fill="#FFFFFF" style={{opacity: state.index===2 ? 1 : 0.9}}/>
                </TabItemCenter>
            </LinearGradient>
            
            <TabItem onPress={()=>goTo('Calendar')}>
                <Calendar width="24" height="24" fill="#FF985F" style={{opacity: state.index===3 ? 1 : 0.9}}/>
            </TabItem>
            <TabItem onPress={()=>goTo('Profile')}>
                <Profile width="24" height="24" fill="#FF985F" style={{opacity: state.index===4 ? 1 : 0.9}}/>
            </TabItem>
           
        </TabArea>
    )
}