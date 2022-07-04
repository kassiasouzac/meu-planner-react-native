import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import CreateEvent from "../screens/Event/CreateEvent";
import ListEvents from "../screens/Event/ListEvents";
import ListEvent from "../screens/Event/ListEvent";
import UpdateEvent from "../screens/Event/UpdateEvent";
import CreateTask from "../screens/Task/CreateTask";
import ListTasks from "../screens/Task/ListTasks";
import ListTask from "../screens/Task/ListTask";
import UpdateTask from "../screens/Task/UpdateTask";
import CreateGoalStep from "../screens/Goal/CreateGoal/CreateGoalStep";
import CreateGoal from "../screens/Goal/CreateGoal";
import ListGoals from "../screens/Goal/ListGoals";
import ListGoal from "../screens/Goal/ListGoal";
import UpdateGoal from "../screens/Goal/UpdateGoal";
import CreateHabit from "../screens/Habit/CreateHabit";
import CreatePersonalizedHabit from "../screens/Habit/CreatePersonalizedHabit";
import ListHabit from "../screens/Habit/ListHabit";
import ListHabits from "../screens/Habit/ListHabits";
import UpdateHabit from "../screens/Habit/UpdateHabit";
import Profile from "../screens/Profile";
import Contact from "../screens/Contact";
import DetailContact from "../screens/DetailContact";
import TabCreateHabit from "../screens/TabCreateHabit";
import TabRoutes from "./Tab";



const Stack = createStackNavigator();

export default () => (

    <Stack.Navigator
    initialRouteName="Preload" screenOptions={{
        title:'',
        headerShown: false,
        headerStyle:{
            backgroundColor: '#6294B2',
            height:35
        },
    }}
        >
        <Stack.Screen name="TabRoutes" component={TabRoutes}/>
        
        <Stack.Screen name="Home" component={Home} />
    
        <Stack.Screen name="Profile" component={Profile} />

        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="DetailContact" component={DetailContact} />

        <Stack.Screen name="CreateEvent" component={CreateEvent}  />
        <Stack.Screen name="ListEvent" component={ListEvent} />
        <Stack.Screen name="ListEvents" component={ListEvents} />
        <Stack.Screen name="UpdateEvent" component={UpdateEvent} />

        <Stack.Screen name="CreateTask" component={CreateTask} />
        <Stack.Screen name="UpdateTask" component={UpdateTask} />
        <Stack.Screen name="ListTasks" component={ListTasks} />
        <Stack.Screen name="ListTask" component={ListTask} />
        <Stack.Screen name="CreateGoal" component={CreateGoal} />
        <Stack.Screen name="CreateGoalStep" component={CreateGoalStep} />
        <Stack.Screen name="ListGoal" component={ListGoal} />
        <Stack.Screen name="ListGoals" component={ListGoals} />
        <Stack.Screen name="UpdateGoal" component={UpdateGoal} />

        <Stack.Screen name="CreateHabit" component={CreateHabit} />
        <Stack.Screen name="CreatePersonalizedHabit" component={CreatePersonalizedHabit} s/>
        <Stack.Screen name="ListHabit" component={ListHabit} />
        <Stack.Screen name="ListHabits" component={ListHabits} />
        <Stack.Screen name="UpdateHabit" component={UpdateHabit} />
        <Stack.Screen name="TabCreateHabit" component={TabCreateHabit} />
        
    </Stack.Navigator>
);