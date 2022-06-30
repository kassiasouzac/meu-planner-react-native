import React, { useState, useEffect } from "react";
import { FontAwesome5, MaterialCommunityIcons, Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { format, parseISO } from 'date-fns';
import { useNavigation } from "@react-navigation/native";

import styled from "styled-components/native";
import Icontitle from "../assets/icons/file-lines-solid.svg"
import IconText from "../assets/icons/text.svg"
import IconCalendar from "../assets/icons/calendar.svg"
import { api } from "../services/api"
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const List = styled.FlatList`
    width: 100%;
    height:85%
`;

const ItemArea = styled.TouchableOpacity`
    width: 100%
    flex-direction: row;
    padding-left: 2px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
    padding-bottom: 0px;
    padding-top: 30px;
`;

const ItemTitle = styled.Text`
    font-size: 18px;
    color: 'rgba(166,156,156,0.9)';
    font-family: Roboto-Medium;
    margin-left: 10px;
`;

const ItemLineArea = styled.View`
    width: 100%
    flex-direction: row;
    padding: 0px;
    align-items: center;
    margin-top:10px;
`;

const LineArea = styled.View`
    width: 60%
    heigth: 50px;
    flex-direction: row;
    justify-content: space-between;
    margin-top:10px;
    padding-left: 0px;
    
`;

const Box = styled.View`
    widht:30%;
    heigth: 50px;
    flex-direction: row;
    justify-content: center;
    padding:0px;
`;

const InternBox = styled.View`
heigth: 14px;
width: 14px;
justify-content: flex-start;
align-items: center;
`;

const ItemDescription = styled.Text`
font-size: 14px;
color: 'rgba(166,156,156,0.9)';
font-family: Roboto-Regular;
margin-left: 10px;
`;


const ItemBorder = styled.View`
    width: 100%;
    borderTopWidth: 1px;
    border-color: 'rgba(246, 180, 118, 0.54)';
    padding-top: 15px;
`;

const CategoryTag = styled.View`
    align-self: center;
    padding-left: 10px;
    padding-right: 10px;
    position: absolute;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    background-color: 'rgba(229, 231, 233, 1)';
    top: 15px;
    right: 20px;
    zIndex: 5;
`;

const LabelText = styled.Text`
    font-size: 16px;
    color: #FF985F;
    font-family: Pacifico-Regular;
    margin-left:10px;
`;

export default ({options}) => {

    const [category, setCategory] = useState();
    const navigation = useNavigation();

    useEffect(()=> {
        async function loadInfo(){
            const response = await api.get('/categorys');
            setCategory(response.data)     
            }
    loadInfo();
    }, [])


    function renderIcon(categoryId){
        const car = category?.category[0].id;
        const culture = category?.category[1].id;

        switch(categoryId){
            case car :
                return(<FontAwesome5 name="car" size={14} color="rgba(0, 0, 0, 0.5)" />);
                break;
            case culture :
                return(<Ionicons name="earth-sharp" size={16} color="rgba(0, 0, 0, 0.5)" />);
                break;
            case category?.category[2].id:
                return(<FontAwesome5 name="book-reader" size={14} color="rgba(0, 0, 0, 0.5)" />);
                break;
            case category?.category[3].id:
                return(<MaterialCommunityIcons name="gamepad-square" size={16} color="rgba(0, 0, 0, 0.5)" />);
                break;
            case category?.category[4].id:
                return(<MaterialIcons name="sports-soccer" size={16} color="rgba(0, 0, 0, 0.5)" />);
                break;
            case category?.category[5].id:
                return(<MaterialIcons name="family-restroom" size={14} color="rgba(0, 0, 0, 0.5)" />);
                break;
            case category?.category[6].id:
                return(<FontAwesome5 name="praying-hands" size={14} color="rgba(0, 0, 0, 0.5)" />);
                break;
            case category?.category[7].id:
                return(<AntDesign name="like1" size={14} color="rgba(0, 0, 0, 0.5)" />);
                break;
            case category?.category[8].id:
                return(<MaterialCommunityIcons name="airplane" size={18} color="rgba(0, 0, 0, 0.5)" />);
                break;
            case category?.category[9].id:
                return(<AntDesign name="medicinebox" size={18} color="rgba(0, 0, 0, 0.5)" />);
                break;
            case category?.category[10].id:
                return(<Ionicons name="md-file-tray-stacked-sharp" size={18} color="rgba(0, 0, 0, 0.5)" />);
                break;
            case category?.category[11].id:
                return(<MaterialIcons name="business-center" size={16} color="rgba(0, 0, 0, 0.5)" />);
                break;
        }
    }

    function renderName(categoryId){
        switch(categoryId){
            case category?.category[0].id :
                return("Automóvel");
                break;
            case category?.category[1].id :
                return("Cultura");
                break;
            case category?.category[2].id:
                return("Educação");
                break;
            case category?.category[3].id:
                return("Entretenimento");
                break;
            case category?.category[4].id:
                return("Esporte");
                break;
            case category?.category[5].id:
                return("Família");
                break;
            case category?.category[6].id:
                return("Religião");
                break;
            case category?.category[7].id:
                return("Social");
                break;
            case category?.category[8].id:
                return("Viagem");
            case category?.category[9].id:
                return("Saúde");
                break;
            case category?.category[10].id:
                return("Organização");
                break;
            case category?.category[11].id:
                return("Profissional");
                break;
        }
    }

    function handleNavigation(item){
        const title = item.title;
        const description = item.description;
        const date = (parseISO(item.date));
        const dateString = format(date,"dd/MM/yyyy");
        const id = item.id;
        const categoryId = item.categoryId;
   
        navigation.navigate('ListTask', {title, description, dateString, id, categoryId})

    }

    function renderItem(item){
        const date = (parseISO(item.date))
        const dateString = format(date,"dd/MM/yyyy") ;
        return(
            
           <View>
            <TouchableOpacity
                onPress={() => handleNavigation(item)}
            >
            <ItemArea >
               <CategoryTag>
                    {renderIcon(item.categoryId)}
                    <LabelText>{renderName(item.categoryId)}</LabelText>
                </CategoryTag>
                <ItemBorder>
                    <ItemLineArea>
                        <Icontitle width="14" height="14" fill="#FF985F"/>
                        <ItemTitle>{item.title}</ItemTitle>
                    </ItemLineArea>

                    <ItemLineArea>
                        <IconText width="14" height="14" fill="#FF985F"/>
                    <ItemDescription>{item.description}</ItemDescription>
                    </ItemLineArea>

                    <LineArea>
                   <Box>
                   <InternBox><IconCalendar width="14" height="14" fill="#FF985F"/></InternBox>
                    <ItemDescription>{dateString}</ItemDescription>
                   </Box>
   
                    </LineArea>
                </ItemBorder>
            </ItemArea> 
            </TouchableOpacity>
           </View>
        )
    }
   

        return (
            <List
            data={options}
            keyExtractor={(item) => (item.id)}
            renderItem={({item}) => renderItem(item)}
            />
    );
}