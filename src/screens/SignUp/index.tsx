import React, { useState, useContext } from "react";
import { useNavigation } from '@react-navigation/native';
import { api } from "../../services/api"

import SignInput from '../../components/SignInput';
import CustomButton from "../../components/CustomButton";
import Title from '../../components/Title';
import {AntDesign} from '@expo/vector-icons';
import { ActivityIndicator } from "react-native";


import { Container, InputArea, 
        SignMessageButton, 
        SignMessageButtonTextBold, Back } from './styles'; 


export default () => {
    const [email, setEmailField] = useState('');
    const [password, setPasswordField] = useState('');
    const [name, setNameField] = useState('');
    const [confirmPassword, setConfirmPasswordField] = useState('');
    const [lastname, setLastNameField] = useState('');
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    async function handleSignUp(){
        if(confirmPassword !== password ){
            alert('Senhas não conferem!')
        }
        else if(email === '' || password === ''|| name === '' || lastname === ''){
            alert('Preencha os campos!')
        }

        setLoading(true);

            const response = await api.post('/user', {
                name,
                lastname,
                email, 
                password}); 
    
            const data = {
                userId: response.data.id,
                email: response.data.email
            }
       
        navigation.navigate('SignIn', data);

        setLoading(false);
    }



    return (
        <Container>
              <Back
            onPress={()=> navigation.goBack() }
            >
            <AntDesign name="back" size={24} color="#FF985F" />
            </Back>

            <Title Title="Cadastro"></Title>
            
            <InputArea>
            
                <SignInput
                    placeholder="Nome"
                    value={name}
                    onChangeText={setNameField}
                />

<               SignInput
                    placeholder="Sobrenome"
                    value={lastname}
                    onChangeText={setLastNameField}
                />

                <SignInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmailField}
                />
                 <SignInput
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPasswordField}
                    password={true}
                />
                 <SignInput
                    placeholder="Confirme sua senha"
                    value={confirmPassword}
                    onChangeText={setConfirmPasswordField}
                    password={true}
                />

            { loading ? (
            <ActivityIndicator size={25} color="#FFF"/>
          ) :(<CustomButton
            buttonName="SALVAR"
            onPress={handleSignUp}
            />)}

            </InputArea>

            <SignMessageButton
            onPress={()=> navigation.navigate('SignIn')}
            >
                <SignMessageButtonTextBold>Já possui uma conta?</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    )
}