import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { api } from "../../../services/api";
import { Container, Area, AreaButton, BorderTitle, ItemArea, ItemBorder, ItemDescription, ItemLineArea, ItemTitle  } from "./styles";

import CircleTwoButtons from "../../../components/CircleTwoButtons";
import SmallCustomButton from "../../../components/SmallCustomButton";

import IconClock from "../../../assets/icons/clock.svg";
import IconEnvelop from "../../../assets/envelope.svg";
import Icontitle from "../../../assets/icons/file-lines-solid.svg"
import IconText from "../../../assets/icons/text.svg"
import IconCalendar from "../../../assets/icons/calendar.svg"
import IconCategory from '../../../assets/icons/category.svg'


export default ({navigation, route}) => {
    const id = route.params.id;
    const title = route.params.title;
    const description = route.params.description;
    const dateString = route.params.dateString;
    const date = route.params.date;
    const [category, setCategory] = useState();
    const [loading, setLoading] = useState(false);
    const [loadingB, setLoadingB] = useState(false);
    const categoryId = route.params.categoryId;

    useEffect(()=>{
        setLoadingB(true);
        async function findCategory(){
            const response = await api.get('category/detail', {params:{
                categoryId: categoryId
            }})
           setCategory(response.data[0].title);
            setLoadingB(false);
        }
        findCategory();
    },[categoryId])
    
    function handleNavigation(){
        navigation.navigate('UpdateTask', {id,title, description, categoryId, date, dateString})
    }

    async function handleRemoveTask(){
        setLoading(true);

        const response = await api.delete('/task/remove',{
            params:{
                taskId: id
            }
        })
        setLoading(false);
        navigation.navigate('ListTasks')
    }

    return(
        <Container>
           
          <Area>
            <BorderTitle>
                {title}
              </BorderTitle>
               <ItemArea >
               {loadingB? (<ActivityIndicator size={65} color="#FFF"/>):(<ItemBorder>
                    <ItemLineArea>
                        <Icontitle width="22" height="22" fill="#FF985F"/>
                        <ItemDescription>{title}</ItemDescription>
                    </ItemLineArea>

                    <ItemLineArea>
                        <IconText width="22" height="22" fill="#FF985F"/>
                    <ItemDescription>{description}</ItemDescription>
                    </ItemLineArea>

                    <ItemLineArea>
                        <IconCalendar width="22" height="22" fill="#FF985F"/>
                    <ItemDescription>{dateString}</ItemDescription>
                    </ItemLineArea>
                    <ItemLineArea>
                        <IconCategory width="22" height="22" fill="#FF985F"/>
                    <ItemDescription>{category}</ItemDescription>
                    </ItemLineArea>
                </ItemBorder>)}
                
            </ItemArea> 
           </Area>
           <AreaButton>

            <SmallCustomButton
                buttonName={"EDITAR"}
                onPress={handleNavigation}

            />
            {loading?(<ActivityIndicator size={65} color="#FFF"/>):(<SmallCustomButton
                buttonName={"REMOVER"}
                onPress={handleRemoveTask}

            />)}
            
            </AreaButton>
           

        </Container>
    )
}