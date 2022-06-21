import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Preload from "../screens/Preload";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import PasswordRecovery from "../screens/PasswordRecovery";
import LoggedOut from "../screens/LoggedOut";


const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
    initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}
    > 
        <Stack.Screen name="LoggedOut" component={LoggedOut} />  
        <Stack.Screen name="SignUp" component={SignUp} />  
        <Stack.Screen name="SignIn" component={SignIn} />  
        <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} />

    </Stack.Navigator>
);