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
import CreateGoal from "../screens/Goal/CreateGoal";
import ListGoals from "../screens/Goal/ListGoals";
import ListGoal from "../screens/Goal/ListGoal";
import UpdateGoal from "../screens/Goal/UpdateGoal";
import CreateHabit from "../screens/Habit/CreateHabit";
import CreatePersonalizedHabit from "../screens/Habit/CreatePersonalizedHabit";
import ListHabit from "../screens/Habit/ListHabit";
import ListHabits from "../screens/Habit/ListHabits";
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
        <Tab.Screen name="UpdateEvent" component={UpdateEvent} />
        <Tab.Screen name="CreateTask" component={CreateTask} />
        <Tab.Screen name="CreateGoal" component={CreateGoal} />
        <Tab.Screen name="ListGoals" component={ListGoals} />
        <Tab.Screen name="ListGoal" component={ListGoal} />
        <Tab.Screen name="UpdateGoal" component={UpdateGoal} />
        <Tab.Screen name="CreateHabit" component={CreateHabit} />
        <Tab.Screen name="CreatePersonalizedHabit" component={CreatePersonalizedHabit}/>
        <Tab.Screen name="ListHabits" component={ListHabits} />
        <Tab.Screen name="ListHabit" component={ListHabit} />
        <Tab.Screen name="TabCreateHabit" component={TabCreateHabit} />
        <Tab.Screen name="ListTask" component={ListTask} />
    </Tab.Navigator>
);