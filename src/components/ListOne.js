import React, { useState, useEffect } from "react";
import { api } from "../services/api";
import { ActivityIndicator } from "react-native";

import styled from "styled-components/native";
import Icontitle from "../assets/icons/file-lines-solid.svg"
import IconText from "../assets/icons/text.svg"
import IconCalendar from "../assets/icons/calendar.svg"
import IconClock from "../assets/icons/clock.svg"
import IconMap from "../assets/icons/map.svg"
import IconCategory from '../assets/icons/category.svg'


const ItemArea = styled.TouchableOpacity`
    width: 100%
    flex-direction: row;
    padding-left: 2px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
    padding-bottom: 0px;
    padding-top: 0px;
`;

const BorderTitle = styled.Text`
font-size: 21px;
color: #FF985F;
font-family: Pacifico-Regular;
margin-bottom: 5px;
align-self: center;
`;

const ItemLineArea = styled.View`
    width: 100%
    flex-direction: row;
    padding: 0px;
    padding-left:15px;
    padding-right:15px;
    align-items: center;
    margin-top:10px;
    margin-bottom:10px;
`;

const LineArea = styled.View`
    width: 60%
    heigth: 50px;
    flex-direction: row;
    justify-content: space-between;
    margin-top:10px;
    padding-left: 15px;
`;

const Box = styled.View`
    heigth: 50px;
    flex-direction: row;
    justify-content: center;
    padding-left:0px;
    margin-bottom:10px;
`;

const InternBox = styled.View`
heigth: 22px;
width: 22px;
justify-content: flex-start;
align-items: center;
`;

const ItemDescription = styled.Text`
font-size: 18px;
color: 'rgba(166,156,156,0.9)';
font-family: Roboto-Regular;
margin-left: 15px;
`;

const Area = styled.View`
align-items: center;

`;

const ItemBorder = styled.View`
    width: 100%;
    borderTopWidth: 1px;
    borderBottomWidth: 1px;
    border-color: 'rgba(0, 0, 0, 0.24)';
    padding-top: 5px;
    padding-bottom:15px;
`;

export default ({title, description, date, time, categoryId, localization}) => {
    const [category, setCategory] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        async function findCategory(){
            const response = await api.get('category/detail', {params:{
                categoryId: categoryId
            }})
           setCategory(response.data[0].title);
            setLoading(false);
        }
        findCategory();
    },[categoryId])
    
   
        return (
            
           <Area>
            <BorderTitle>
                {title}
              </BorderTitle>
               <ItemArea >
              
                {loading? (<ActivityIndicator size={65} color="#FFF"/>):(<ItemBorder>
                    <ItemLineArea>
                        <Icontitle width="22" height="22" fill="#FF985F"/>
                        <ItemDescription>{title}</ItemDescription>
                    </ItemLineArea>

                    <ItemLineArea>
                        <IconText width="22" height="22" fill="#FF985F"/>
                    <ItemDescription>{description}</ItemDescription>
                    </ItemLineArea>

                    <LineArea>
                   <Box>
                   <InternBox><IconCalendar width="22" height="22" fill="#FF985F"/></InternBox>
                    <ItemDescription>{date}</ItemDescription>
                   </Box>
                   <Box style={{paddingLeft:60}}>
                   <InternBox><IconClock  width="22" height="22" fill="#FF985F"/></InternBox>
                    <ItemDescription >{time}</ItemDescription>
                   </Box>
                       
                    </LineArea>
                    <ItemLineArea>
                        <IconMap width="22" height="22" fill="#FF985F"/>
                    <ItemDescription>{localization} </ItemDescription>
                    </ItemLineArea>
                    <ItemLineArea>
                        <IconCategory width="22" height="22" fill="#FF985F"/>
                        <ItemDescription>{category}</ItemDescription>
                    </ItemLineArea>
                </ItemBorder>)}
            </ItemArea> 
           </Area>
           
    );
}