import React, { useEffect } from "react";
import { Container, LoadingIcon } from './styles';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";


import RoundedPreload from '../../assets/roundedPreload.svg';

export default () => {

    const navigation = useNavigation();

    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token){

            }else{
                navigation.navigate('CreateEvent');
            }
        }
        checkToken();
    }, []);

    return (
        <Container>
            <RoundedPreload width="100%" height="260"/>
            <LoadingIcon size="large" color="#FFFFFF"/>
        </Container>
    )
}