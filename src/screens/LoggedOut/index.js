import React from "react";
import { Container, InputArea, CustomButton, CustomButtonLight, CustomButtonText, CustomButtonTextLight} from './styles';
import { LinearGradient } from 'expo-linear-gradient';

import SquareLogo from '../../assets/squareLogo.svg';
import Resolution from '../../assets/resolution.svg';

export default () => {
    return (
        <Container>
            <SquareLogo width = "100%" height="250" />

            <InputArea>

                <CustomButtonLight>
                    <CustomButtonTextLight>LOGIN</CustomButtonTextLight>
                </CustomButtonLight>

                
                <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    colors={['#ff985f', 'rgba(255, 152, 95, 0.35)']}
                    style={{borderRadius: 30, marginBottom:15}}
                >
                <CustomButton>
                    <CustomButtonText>CADASTRO</CustomButtonText>
                </CustomButton>
                </LinearGradient>

            </InputArea>

            <Resolution width = "100%" height="260"/>
        </Container>
    )
}