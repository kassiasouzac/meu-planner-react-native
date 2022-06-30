import React, {  useContext } from "react";
import styled from "styled-components/native";
import IconLogout from '../assets/icons/logout.svg'; 
import { AuthContext } from '../contexts/AuthContext';

const Button = styled.TouchableOpacity`
    height: 24px;
    width:24px;
    justify-content: center;
    align-items: center;
`;


export default () => {
    const { signOut } = useContext(AuthContext);

    async function handleLogout(){
        await signOut()
      }
    return (
       <Button
       onPress={() => handleLogout()}
       >
        <IconLogout width="22" height="22" fill="#FF985F"/>
       </Button>
    );
}