import React from "react";
import { Container, InputArea, CustomButton, CustomButtonLight, CustomButtonText, CustomButtonTextLight} from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

import SquareLogo from '../../assets/squareLogo.svg';
import Resolution from '../../assets/resolution.svg';

export default () => {
    const navigation = useNavigation()
    return (
        <Container>
            <SquareLogo width = "100%" height="250" style={{marginTop:30}} />

            <InputArea>

                <CustomButtonLight
                onPress={()=> navigation.navigate('SignIn')}
                >
                    <CustomButtonTextLight>LOGIN</CustomButtonTextLight>
                </CustomButtonLight>

                
                <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    colors={['#ff985f', 'rgba(255, 152, 95, 0.35)']}
                    style={{borderRadius: 30, marginBottom:15}}
                >
                <CustomButton 
                onPress={()=> navigation.navigate('SignUp')}
                >
                    <CustomButtonText>CADASTRO</CustomButtonText>
                </CustomButton>
                </LinearGradient>

            </InputArea>

            <Resolution width = "100%" height="260"/>
        </Container>
    )
}