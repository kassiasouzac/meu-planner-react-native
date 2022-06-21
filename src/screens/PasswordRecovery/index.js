import React, { useState, useContext } from "react";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';


import SignInput from '../../components/SignInput';
import Title from '../../components/Title';

import { LinearGradient } from 'expo-linear-gradient';
import {AntDesign} from '@expo/vector-icons';

import { Container, InputArea, 
        CustomButton, CustomButtonText, InfoText, Back} from './styles'; 


export default () => {
    const [emailField, setEmailField] = useState('');
    const navigation = useNavigation();

    return (
        <Container>
            <Back
            onPress={()=> navigation.goBack() }
            >
            <AntDesign name="back" size={24} color="#FF985F" />
            </Back>

            <Title Title="Recuperação de senha"></Title>

            <InputArea>
            <InfoText>Um link para criação de uma nova senha será enviado para seu e-mail, caso ele seja válido.</InfoText>
                <SignInput
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangetext={text=>setEmailField(text)}
                />

                <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    colors={['#ff985f', 'rgba(255, 152, 95, 0.35)']}
                    style={{borderRadius: 30, marginTop:70}}
                >
                <CustomButton>
                    <CustomButtonText>RESETAR SENHA</CustomButtonText>
                </CustomButton>
                </LinearGradient>

            </InputArea>

        </Container>
    )
}