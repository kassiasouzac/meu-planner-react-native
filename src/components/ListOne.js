import React, { useState } from "react";
import { Text } from "react-native";
import { FontAwesome5, MaterialCommunityIcons, Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';

import styled from "styled-components/native";
import Icontitle from "../assets/icons/file-lines-solid.svg"
import IconText from "../assets/icons/text.svg"
import IconCalendar from "../assets/icons/calendar.svg"
import IconClock from "../assets/icons/clock.svg"
import IconMap from "../assets/icons/map.svg"
import IconBell from "../assets/bell.svg"
import IconEnvelope from "../assets/envelope.svg"

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

export default ({options, id}) => {


        return (
            <ItemArea></ItemArea>
    );
}