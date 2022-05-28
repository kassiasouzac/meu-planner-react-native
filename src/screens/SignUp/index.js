import React, { useState, useContext } from "react";
import { TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { UserContext } from '../../contexts/UserContext';
import SignInput from '../../components/SignInput';
import Title from '../../components/Title';

import { LinearGradient } from 'expo-linear-gradient';

import { Container, InputArea, 
        CustomButton, CustomButtonText,
        SignMessageButton, 
        SignMessageButtonTextBold } from './styles'; 


export default () => {
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [nameField, setNameField] = useState('');
    const [confirmPasswordField, setConfirmPasswordField] = useState('');

    return (
        <Container>

            <Title Title="Cadastro"></Title>
            
            <InputArea>
            
                <SignInput
                    placeholder="Nome"
                    value={nameField}
                    onChangetext={text=>setNameField(text)}
                />

                <SignInput
                    placeholder="Email"
                    value={emailField}
                    onChangetext={t=>setEmailField(t)}
                />
                 <SignInput
                    placeholder="Senha"
                    value={passwordField}
                    onChangetext={t=>setPasswordField(t)}
                    password={true}
                />
                 <SignInput
                    placeholder="Confirme sua senha"
                    value={confirmPasswordField}
                    onChangetext={t=>setConfirmPasswordField(t)}
                    password={true}
                />

                <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    colors={['#ff985f', 'rgba(255, 152, 95, 0.35)']}
                    style={{borderRadius: 30, marginTop:70,}}
                >
                <CustomButton>
                    <CustomButtonText>SALVAR</CustomButtonText>
                </CustomButton>
                </LinearGradient>

            </InputArea>

            <SignMessageButton>
                <SignMessageButtonTextBold>Já possui uma conta?</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    )
}