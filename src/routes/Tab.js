import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Home from "../screens/Home";
import CreateEvent from "../screens/Event/CreateEvent";
import ListEvents from "../screens/Event/ListEvents";
import ListEvent from "../screens/Event/ListEvent";
import UpdateEvent from "../screens/Event/UpdateEvent";
import CreateTask from "../screens/Task/CreateTask";
import ListTasks from "../screens/Task/ListTasks";
import ListTask from "../screens/Task/ListTask";
import UpdateTask from "../screens/Task/UpdateTask";
import CreateGoal from "../screens/Goal/CreateGoal";
import CreateGoalStep from "../screens/Goal/CreateGoal/CreateGoalStep";
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
import TabCreateHabit from "../screens/TabCreateHabit";
import Create from "../screens/TabCreate";
import CustomTabBar from "../components/CustomTabBar";
import DetailContact from "../screens/DetailContact";
import { Button, Text, TouchableOpacity } from "react-native";
import IconBack from '../assets/icons/back.svg'; 

const Tab = createBottomTabNavigator();

export default ({navigation}) => (
    <Tab.Navigator
    screenOptions={{
        headerShown: true,
        headerTitle: '',
        headerStyle:{
            backgroundColor: '#6294B2',
            height: 22
        }
    
    }}
    tabBar={props=><CustomTabBar {...props}/>}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="ListTasks" component={ListTasks} />
        <Tab.Screen name="Create" component={Create}/>
        <Tab.Screen name="Contact" component={Contact}/>
        <Tab.Screen name="DetailContact" component={DetailContact}/>
        <Tab.Screen name="Profile" component={Profile} screenOptions={{headerShown: false}}/>        
        <Tab.Screen name="CreateEvent" component={CreateEvent}  />
        <Tab.Screen name="ListEvent" component={ListEvent} />
        <Tab.Screen name="ListEvents" component={ListEvents} />
        <Tab.Screen name="UpdateEvent" component={UpdateEvent} />
        <Tab.Screen name="CreateTask" component={CreateTask} />
        <Tab.Screen name="ListTask" component={ListTask} />
        <Tab.Screen name="UpdateTask" component={UpdateTask} />
        <Tab.Screen name="CreateGoal" component={CreateGoal} />
        <Tab.Screen name="CreateGoalStep" component={CreateGoalStep} />
        <Tab.Screen name="ListGoals" component={ListGoals} />
        <Tab.Screen name="ListGoal" component={ListGoal} />
        <Tab.Screen name="UpdateGoal" component={UpdateGoal} />
        <Tab.Screen name="CreateHabit" component={CreateHabit} />
        <Tab.Screen name="CreatePersonalizedHabit" component={CreatePersonalizedHabit}/>
        <Tab.Screen name="ListHabits" component={ListHabits} />
        <Tab.Screen name="ListHabit" component={ListHabit} />
        <Tab.Screen name="UpdateHabit" component={UpdateHabit} />
        <Tab.Screen name="TabCreateHabit" component={TabCreateHabit} />
        
    </Tab.Navigator>
);