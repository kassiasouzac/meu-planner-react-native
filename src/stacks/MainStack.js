import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Preload from "../screens/Preload";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import PasswordRecovery from "../screens/PasswordRecovery";
import LoggedOut from "../screens/LoggedOut";
import CreateEvent from "../screens/Event/CreateEvent";
import CreateTask from "../screens/Task/CreateTask";
import CreateGoal from "../screens/Goal/CreateGoal";
import CreateHabit from "../screens/Habit/CreateHabit";



const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
    initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />  
        <Stack.Screen name="LoggedOut" component={LoggedOut} />  
        <Stack.Screen name="SignUp" component={SignUp} />  
        <Stack.Screen name="SignIn" component={SignIn} />  
        <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} /> 
        <Stack.Screen name="CreateEvent" component={CreateEvent} />
        <Stack.Screen name="CreateTask" component={CreateTask} />
        <Stack.Screen name="CreateGoal" component={CreateGoal} />
        <Stack.Screen name="CreateHabit" component={CreateHabit} />

    </Stack.Navigator>
);