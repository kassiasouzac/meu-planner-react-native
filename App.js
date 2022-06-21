/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import UserContextProvider from './src/contexts/UserContext';
//import MainStack from './src/stacks/MainStack';
import Routes from './src/routes';
import { AuthProvider } from './src/contexts/AuthContext';

import { StatusBar } from 'react-native';


export default () => {
    return ( 
      
      
        <NavigationContainer >
          <AuthProvider>
          <StatusBar backgroundColor="#6294B2" barStyle="dark-content" translucent={false}/>
          <Routes/>
          </AuthProvider>
        </NavigationContainer>
      
    )
}