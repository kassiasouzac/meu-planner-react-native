import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import CreateEvent from "../screens/Event/CreateEvent";
import ListEvents from "../screens/Event/ListEvents";
import ListEvent from "../screens/Event/ListEvent";
import CreateTask from "../screens/Task/CreateTask";
import ListTasks from "../screens/Task/ListTasks";
import CreateGoalStep from "../screens/Goal/CreateGoal/CreateGoalStep";
import CreateGoal from "../screens/Goal/CreateGoal";
import CreateHabit from "../screens/Habit/CreateHabit";
import CreatePersonalizedHabit from "../screens/Habit/CreatePersonalizedHabit";
import Profile from "../screens/Profile";
import Calendar from "../screens/Calendar";
import TabCreateHabit from "../screens/TabCreateHabit";
import Create from "../screens/TabCreate";
import CustomTabBar from "../components/CustomTabBar";

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator
    screenOptions={{
        headerShown: false,
    }}
    tabBar={props=><CustomTabBar {...props}/>}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="ListTasks" component={ListTasks} />
        <Tab.Screen name="Create" component={Create}/>
        <Tab.Screen name="Calendar" component={Calendar}/>
        <Tab.Screen name="Profile" component={Profile}/>        
        <Tab.Screen name="CreateEvent" component={CreateEvent}  />
        <Tab.Screen name="ListEvent" component={ListEvent} />
        <Tab.Screen name="ListEvents" component={ListEvents} />
        <Tab.Screen name="CreateTask" component={CreateTask} />
        <Tab.Screen name="CreateGoal" component={CreateGoal} />
        <Tab.Screen name="CreateGoalStep" component={CreateGoalStep} />
        <Tab.Screen name="CreateHabit" component={CreateHabit} />
        <Tab.Screen name="CreatePersonalizedHabit" component={CreatePersonalizedHabit}/>
        <Tab.Screen name="TabCreateHabit" component={TabCreateHabit} />
    </Tab.Navigator>
);