import React from 'react';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons'; 


const ModalCategory = styled.Modal``;
const ModalHeader = styled.View``;
const ModalView = styled.View``;
const List = styled.FlatList``;


export default ({options, visible}) => {
    const [selected, setSelected] = useState();
    const [modalVisible, setModalVisible] = useState(visible);

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
        <ModalCategory
        animationType="slide"
        visible={modalVisible}
        onRequestClose={()=> {
            setModalVisible(!visible)
        }}
        >
            <ModalHeader>
                <AntDesign.Button backgroundColor="#ffffff" name="close" size={20} color="#ff985f" onPress={() => setModalVisible(!modalVisible)} />
             </ModalHeader>
                <ModalView>
                    <List
                    data={options}
                    keyExtractor={(item) => (item.id)}
                    renderItem={({item}) => renderOption(item)}
                    />
                </ModalView>
        </ModalCategory>

    )
}