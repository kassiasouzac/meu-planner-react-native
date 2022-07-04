import React, {useState} from "react";
import { api } from "../../../services/api";
import { format, parseISO } from 'date-fns';
import { ActivityIndicator } from "react-native";
import { Container, AreaButton, AreaList } from "./styles";
import CircleTwoButtons from "../../../components/CircleTwoButtons";
import SmallCustomButton from "../../../components/SmallCustomButton";
import ListOne from "../../../components/ListOne";
import IconClock from "../../../assets/icons/clock.svg";
import IconEnvelop from "../../../assets/envelope.svg";


export default ({navigation, route}) => {
   const title = route.params.title;
   const description = route.params.description;
   const date = (route.params.date)
   const dateString = format(parseISO(date),"dd/MM/yyyy") ;
   const time = route.params.time;
   const timeString =(format(parseISO(time), "HH:mm")) ;
   const categoryId = route.params.categoryId;
   const id = route.params.id;
   const localization = route.params.localization;
   const extendedLocalization = route.params.extendedLocalization;
   const repeat = route.params.repeat;
   const [loading, setLoading] = useState(false);


   function handleNavigation(){
        navigation.navigate('UpdateEvent', {title, description, date, id, 
            dateString, time, timeString, categoryId, localization, extendedLocalization, repeat})
   }

   async function handleRemoveEvent(){
        setLoading(true);
        const response = await api.delete('/event/remove', {
            params:{
                eventId: id
            }
        })

        setLoading(false);
        navigation.navigate('ListEvents')
   }
  
    
    return(
        <Container> 
           <AreaList>
           <ListOne
            title={title}
            description={description}
            date={dateString}
            time={timeString}
            categoryId={categoryId}
            localization ={localization}
            />
           </AreaList>

            
            <AreaButton>
           <SmallCustomButton
           buttonName={'EDITAR'}
           onPress={handleNavigation}
           />

           {loading?(<ActivityIndicator size={55} color="#FFF"/>):
           (<SmallCustomButton
           buttonName={'REMOVER'}
           onPress={handleRemoveEvent}
           />)}
            </AreaButton>
            

                 

        </Container>
    )
}