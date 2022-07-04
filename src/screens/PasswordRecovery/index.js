import React, { useState, useContext } from "react";
import { useNavigation } from '@react-navigation/native';
import { api } from "../../services/api";


import SignInput from '../../components/SignInput';
import Title from '../../components/Title';

import { LinearGradient } from 'expo-linear-gradient';
import {AntDesign} from '@expo/vector-icons';

import { Container, InputArea, 
        CustomButton, CustomButtonText, InfoText, Back} from './styles'; 
import { ActivityIndicator } from "react-native";


export default () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    async function handleRequest(){
        setLoading(true)
        const response = await api.post('/recovery',{
            email: email
        })
        setLoading(false);
        navigation.navigate('SignIn');
    }
       
    return (
        <Container>
            <Back
            onPress={()=> navigation.goBack() }
            >
            <AntDesign name="back" size={24} color="#FF985F" />
            </Back>

            <Title Title="Recuperação de senha"></Title>

            <InputArea>
            <InfoText>Você receberá um e-mail para recuperação da senha, caso ele seja válido.</InfoText>
            <SignInput
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                    password={false}
                />

                <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    colors={['#ff985f', 'rgba(255, 152, 95, 0.35)']}
                    style={{borderRadius: 30, marginTop:70}}
                >
                {loading?(<ActivityIndicator size={65} color="#FFF"/>):(
                    <CustomButton
                    onPress={()=> handleRequest()}
                    >
                        <CustomButtonText>RESETAR SENHA</CustomButtonText>
                    </CustomButton>
                )}
                </LinearGradient>

            </InputArea>

        </Container>
    )
}