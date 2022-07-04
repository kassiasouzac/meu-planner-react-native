import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components/native";
import * as Contacts from 'expo-contacts';

const Container = styled.SafeAreaView`
    background-color: 'rgba(250, 248, 243, 0.57)';
    flex: 1;
    justify-content:  flex-start;
    align-items: center;
    padding: 0px;
`;


export default function (){
    let [error, setError] = useState(undefined);
    let [contacts, setContacts] = useState();

    useEffect(()=>{
      (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.Emails, Contacts.Fields.FirstName, Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers],
            });
       
            if (data.length > 0) {
              
              console.log(data);
              setContacts(data);
            }else{
              setError("Não existem contatos.");
            }
          }else{
              setError("Permissão para acessar os contatos foi negada!")
          }
      })();
  
  },[]);
    return(
        <Container>

        </Container>
    )
}