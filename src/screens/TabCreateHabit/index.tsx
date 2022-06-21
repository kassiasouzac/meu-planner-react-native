import React, { useState, useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, ImageArea, Transparent, WhiteText, ListArea, WhiteTextSmall, PersonalizedArea, HabitArea, ButtonsColumn} from "./styles";
import HomePlanner from "../../assets/homePlanner.svg";
import RoundCreateButton from "../../components/RoundCreateButton";


export default () => {
    const [visible, setVisible] = useState(false);
    const navigation = useNavigation();

    
    return(
        <Container>
           
           <Transparent>
           <ImageArea>
                <HomePlanner width="700" height="640" />
            </ImageArea>
            <ButtonsColumn>
            <HabitArea>
            <RoundCreateButton
            onPress={()=> navigation.reset}
            />
            <WhiteText>Criar Hábito</WhiteText>
            </HabitArea>
            <ListArea>
            <RoundCreateButton
            onPress={()=> navigation.navigate('CreateHabit')}
            />
            <WhiteTextSmall>Lista de Hábitos</WhiteTextSmall>
            </ListArea>
           
            <PersonalizedArea>
            <RoundCreateButton
            onPress={()=> navigation.navigate('CreatePersonalizedHabit')}
            />
            <WhiteTextSmall>Criar Hábito Personalizado</WhiteTextSmall>
            </PersonalizedArea>
        </ButtonsColumn>
            
           </Transparent>
        </Container>
    )
}