import React, { useState } from "react";
import { Text } from "react-native";
import { FontAwesome5, MaterialCommunityIcons, Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';

import styled from "styled-components/native";
import Icontitle from "../assets/icons/file-lines-solid.svg"
import IconText from "../assets/icons/text.svg"
import IconCalendar from "../assets/icons/calendar.svg"
import IconClock from "../assets/icons/clock.svg"
import IconMap from "../assets/icons/map.svg"

const List = styled.FlatList`
    width: 95%;
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
    border-radius: 40px;
    background-color: 'rgba(204,213,214,1)';
    top: 15px;
    right: 20px;
    zIndex: 5;
`;

const RepeatTag = styled.View`
    align-self: center;
    padding-left: 10px;
    padding-right: 10px;
    position: absolute;
    align-items: center;
    flex-direction: row;
    border-radius: 40px;
    justify-content: space-around;
    background-color: #FF985F;
    top: 15px;
    left: 15px;
    zIndex: 5;
`;


const LabelTextTag = styled.Text`
    font-size: 16px;
    color: #FFFFFF;
    font-family: Pacifico-Regular;
    margin-left:10px;
`;

const LabelText = styled.Text`
    font-size: 16px;
    color: #FF985F;
    font-family: Pacifico-Regular;
    margin-left:10px;
`;

export default ({options}) => {

    function renderLabel(boolean, frequency){
        if(boolean === 'true'){
            return(
                <RepeatTag>
                    <FontAwesome5 name="calendar-alt" size={14} color="#ffffff"/>
                    <LabelTextTag>{frequency}</LabelTextTag>
                </RepeatTag>
            )
        }
    }
    

    function renderIcon(category){

        switch(category){
            case'Carro':
                return(<FontAwesome5 name="car" size={14} color="#FF985F" />);
                break;
            case'Cultura':
                return(<Ionicons name="earth-sharp" size={16} color="#FF985F" />);
                break;
            case'Educação':
                return(<FontAwesome5 name="book-reader" size={14} color="#FF985F" />);
                break;
            case'Entretenimento':
                return(<MaterialCommunityIcons name="gamepad-square" size={16} color="#FF985F" />);
                break;
            case'Esporte':
                return(<MaterialIcons name="sports-soccer" size={16} color="#FF985F" />);
                break;
            case'Família':
                return(<MaterialIcons name="family-restroom" size={14} color="#FF985F" />);
                break;
            case'Profissional':
                return(<MaterialIcons name="business-center" size={16} color="#FF985F" />);
                break;
            case'Religião':
                return(<FontAwesome5 name="praying-hands" size={14} color="#FF985F" />);
                break;
            case'Social':
                return(<AntDesign name="like1" size={14} color="#FF985F" />);
                break;
            case'Viagem':
                return(<MaterialCommunityIcons name="airplane" size={18} color="#FF985F" />);
                break;
        }
    }

    function renderOption(item){
        return(
            
            <ItemArea >
               {renderLabel(item.repeat.isOn, item.repeat.frequency)}
                <CategoryTag>
                    {renderIcon(item.category)}
                    
                    <LabelText>{item.category}</LabelText>
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
                    <ItemDescription>{item.date}</ItemDescription>
                   </Box>
                   <Box>
                   <InternBox><IconClock width="14" height="14" fill="#FF985F"/></InternBox>
                    <ItemDescription>{item.time}</ItemDescription>
                   </Box>
                       
                    </LineArea>
                    <ItemLineArea>
                        <IconMap width="14" height="14" fill="#FF985F"/>
                    <ItemDescription> {item.localization.address}</ItemDescription>
                    </ItemLineArea>
                    
                </ItemBorder>
            </ItemArea> 
        )
    }
   

        return (
            <List
                data={options}
                keyExtractor={(item) => (item.id)}
                renderItem={({item}) => renderOption(item)}
                onEndReached={this.handleLoadMore}
            />
    );
}