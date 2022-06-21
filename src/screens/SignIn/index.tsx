import React, { useState, useContext } from "react";
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/AuthContext';
import SignInput from '../../components/SignInput';
import Title from '../../components/Title';
import CustomButton from "../../components/CustomButton";

import { Container, InputArea, 
        SignMessageButton, 
        SignMessageButtonTextBold, Back } from './styles'; 

import {AntDesign} from '@expo/vector-icons';
import { ActivityIndicator } from "react-native";

export default function SignIn (){
    const { signIn, loadingAuth } = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    async function handleLogin(){

        if(email === '' || password === ''){
            console.log('input vazio')
          return;
        }
        await signIn({ email, password })
      }

    return (
        <Container>
            <Back
            onPress={()=> navigation.goBack() }
            >
            <AntDesign name="back" size={24} color="#FF985F" />
            </Back>
            
            <Title Title="Login"></Title>
            
            <InputArea>
            
                <SignInput
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChangeText={setEmail}
                    password={false}
                />

                <SignInput
                    placeholder="Digite sua senha"
                    value={password}
                    onChangeText={setPassword}
                    password={true}
                />
        
            { loadingAuth ? (
            <ActivityIndicator size={25} color="#FFF"/>
          ) :(<CustomButton
            buttonName="LOGAR"
            onPress={handleLogin}
            />)}

            </InputArea>

            <SignMessageButton
            onPress={()=> navigation.navigate('PasswordRecovery')}
            >
                <SignMessageButtonTextBold>Esqueceu sua senha?</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    )
}