import React, { useState, useEffect } from "react";
import { api } from "../services/api";

import styled from "styled-components/native";
import { FontAwesome5, Fontisto, AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'; 

const TitleLine = styled.Text`
font-size: 20px;
color: #FF985F;
font-family: Pacifico-Regular;
margin-left:10px;
`;

const Line = styled.View`
width: 100%;
borderTopWidth: 1px;
border-color: 'rgba(255, 152, 95, 0.24)';
padding: 0px;
margin: 0px;
`;

const Area = styled.View`
width: 100%
padding-top: 5px;
`;

const RowArea = styled.View`
    flex-direction: row;
    margin-top: 10px;
    padding-left:20px;
    padding-right:20px;
    width: 100%;
    height: 100px;
    justify-content: space-between;
    align-items: center;
`;

const List = styled.FlatList`
`;

const Circle = styled.View`
    margin-right: 10px;
    margin-left: 10px;
    width: 95px;
    height: 95px;
    border-radius: 47.5px; 
    border-color: 'rgba(255, 152, 95, 0.55)';
    borderWidth: 1px;
    justify-content: center;
    align-items: center;
`;

const CircleText = styled.Text`
    font-size: 12px;
    color: 'rgba(0, 0, 0, 0.45)';
    font-family: Outfit-Regular;
    padding: 5px
    text-align: center;
`;
const Button = styled.TouchableOpacity``;

export default ({titleLine, options, onPress}) =>{
    const [category, setCategory] = useState();
    const [page, setPage] = useState(1);

    useEffect(()=> {
        async function loadInfo(){
            const response = await api.get('/categorys');
            setCategory(response.data)     
            }
    loadInfo();
    }, [])

    function renderItem(item){

            return(
                <Button>
                    <Circle>
                        {renderIcon(item.categoryId)}
                        <CircleText numberOfLines={5}>{item.title}</CircleText>
                    </Circle>
                </Button>
            )
 
        }

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
    

    return(
       <Area>
        <TitleLine>
           *  {titleLine}
        </TitleLine>
        <Line>
        <RowArea>
           <List
            data={options}
            keyExtractor={(item) => (item.id)}
            renderItem={({item}) => renderItem(item)}
            horizontal={true}
            initialNumToRender={3}
           />
           <Button >
           <Fontisto style={{ padding:0, marginRight:-10}} name="angle-dobule-right" size={18} color="#FF985F" />
           </Button>
        </RowArea>
        </Line>
       </Area>
        
    )
}