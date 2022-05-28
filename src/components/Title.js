import React from 'react';
import AppLoading from 'expo-app-loading';
import styled from 'styled-components/native';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
 

const TitleArea = styled.View`
    width: 100%
    height: 80px;
    padding-left: 25px;
    margin-top: 45px;
    margin-bottom: 35px;
`;

const TextTitle = styled.Text`
    font-size: 40px;
    color:#FF985F;
    font-family: Pacifico-Regular;
`;

export default ({Title}) => {
    return(
       <TitleArea>
           <TextTitle>
            {Title}
           </TextTitle>
       </TitleArea>
    );
}