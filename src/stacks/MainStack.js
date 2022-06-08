import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Preload from "../screens/Preload";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import PasswordRecovery from "../screens/PasswordRecovery";
import LoggedOut from "../screens/LoggedOut";
import CreateEvent from "../screens/Event/CreateEvent";
import ListEvents from "../screens/Event/ListEvents";
import ListEvent from "../screens/Event/ListEvent";
import CreateTask from "../screens/Task/CreateTask";
import CreateGoalStep from "../screens/Goal/CreateGoal/CreateGoalStep";
import CreateGoal from "../screens/Goal/CreateGoal";
import CreateHabit from "../screens/Habit/CreateHabit";
import CreatePersonalizedHabit from "../screens/Habit/CreatePersonalizedHabit";



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
        <Stack.Screen name="ListEvents" component={ListEvents} />
        <Stack.Screen name="ListEvent" component={ListEvent} />

        <Stack.Screen name="CreateTask" component={CreateTask} />

        <Stack.Screen name="CreateGoal" component={CreateGoal} />
        <Stack.Screen name="CreateGoalStep" component={CreateGoalStep} />

        <Stack.Screen name="CreateHabit" component={CreateHabit} />
        <Stack.Screen name="CreatePersonalizedHabit" component={CreatePersonalizedHabit} />

    </Stack.Navigator>
);