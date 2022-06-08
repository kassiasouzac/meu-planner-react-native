import React, { useState } from "react";
import styled from "styled-components/native";
import { Feather, AntDesign } from '@expo/vector-icons'

const List = styled.FlatList``;

const ItemArea = styled.TouchableOpacity`
    width: 100%
    flex-direction: row;
    padding-left: 2px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const Item = styled.Text`
    font-size: 24px;
    color: 'rgba(166,156,156,0.9)';
    font-family: Roboto-Regular;
`;

const ItemBorder = styled.View`
    width: 90%;
    borderBottomWidth: 2px;
    border-color: 'rgba(255, 152, 95, 0.8)';
    padding: 0px;
    margin: 0px;
`;


export default ({options}) => {
    const [selected, setSelected] = useState([]);
   
    function toggleSelection(item){
        let index = selected.findIndex(i=> i ?.id === item.id);
        let arrSelected = [...selected];
        
        if(index !== -1){
            arrSelected.splice(index, 1);
        }else{
            arrSelected.push(item);
        }
        setSelected(arrSelected);
        
    }

    function renderOption(item){
        return(
            
            <ItemArea onPress={()=> toggleSelection(item)}
                style={{backgroundColor:selected?.findIndex(i=>i.id === item.id) !== -1 ? 'rgba(98, 148, 178, 0.1)' : 'rgba(249, 248, 248, 0.74)'}}
            >
            {selected?.findIndex(i=>i.id === item.id) !== -1 && (
                <AntDesign name="checksquare" size={24} color="#6294B2"  />
            )}
            {selected?.findIndex(i=>i.id === item.id) === -1 && (
                <Feather name="square" size={24} color="rgba(255, 152, 95, 0.8)" />
            )}
                <ItemBorder>
                    <Item>{item.title}</Item>
                </ItemBorder>
            </ItemArea> 
        )
    }

        return (
            <List
                data={options}
                keyExtractor={(item) => (item.id)}
                renderItem={({item}) => renderOption(item)}
            />
    );
}