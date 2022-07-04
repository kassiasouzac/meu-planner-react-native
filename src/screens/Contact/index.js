import React, { useState, useEffect } from "react";
import { ActivityIndicator, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { api } from "../../services/api";
import * as Contacts from 'expo-contacts';

import ContactSvg from "../../assets/contact.svg";
import IconAdd from "../../assets/icons/user-plus.svg";
import IconUpload from '../../assets/icons/upload.svg';
import IconUser from '../../assets/icons/user.svg';
import IconClose from '../../assets/icons/close.svg';
import IconPhone from '../../assets/icons/phone.svg';
import IconMail from '../../assets/icons/at.svg';

import { Container, TitleArea, ImageArea, TextTitle, LineButton, 
  TextButton, Flatlist, ButtonArea,
  Modal, ModalHeader, ModalView, LineContact, TextContact, ColumnContact,
  CloseButton, InputArea} from "./styles";

import LineInput from "../../components/LineInput";
import SmallCustomButton from "../../components/SmallCustomButton";


export default function ({navigation}){
  let [error, setError] = useState(undefined);
  let [contacts, setContacts] = useState();
  
  const [userContacts, setUserContacts] = useState();
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [phoneNumber, setPhone] = useState();
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [open, setOpen] = useState(false);

  async function loadContacts(){
    const response = await api.get('/contacts')
    setUserContacts(response.data.contact);
    
  }

  useEffect(()=>{
    navigation.addListener('focus', async () => {
      loadContacts();
  });

    (async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
          const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.Emails, Contacts.Fields.FirstName, Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers],
          });
     
          if (data.length > 0) {
            
            setContacts(data);
          }else{
            setError("Não existem contatos.");
          }
        }else{
            setError("Permissão para acessar os contatos foi negada!")
        }
    })();

    loadContacts();
},[]);

  function handleCreateContact(){
    
    if(name === '' || lastname === '' || phoneNumber === ''){
      alert("Preencha os campos obrigatórios");
      return;
    }

    createContact(name, lastname, email, phoneNumber)
    
  }

  async function createContact(name, lastname, email, phoneNumber){
    
    const response = await api.post('/contact',{
      name,
      lastname,
      phoneNumber,
      email
    })

    setName('');
    setLastname('');
    setEmail('');
    setPhone('');
   
    setOpen(false);
    loadContacts();
  }

  function handleNavigation(id, name, lastname, phoneNumber, email){
    navigation.navigate('DetailContact', {id, name, lastname, phoneNumber, email})
  }

  function renderOption(item){
  
    return(
        <LineContact
          onPress={()=> handleNavigation(item.id, item.name, item.lastname, item.phoneNumber, item.email)}
        >
          <IconUser width="18" height="18" fill="#FF985F" />
          <ColumnContact>
            <TextContact>{item.name}</TextContact>
            <TextContact>{item.email}</TextContact>
          </ColumnContact>
        </LineContact>
    )
}

function confirm(){
  Alert.alert("Importar Contatos",
            "Deseja importar seus contatos?",
           [
            {text: "Não", style:"cancel"},
              { text: "Sim", 
                onPress:()=>importContacts()
            }
           ])
}

  function importContacts(){
   
     contacts.forEach(element => {
        createContact(element.firstName, element.lastName, element.emails[0].email, element.phoneNumbers[0].number)
     });
      
  }    

    return(
        <Container>
         <TitleArea>
        <ImageArea>
        <ContactSvg  width="120" height="90"/>    
        </ImageArea>  
           <TextTitle>
            Contatos
           </TextTitle>
       </TitleArea>
      
        <ButtonArea>
       
          <LineButton
          onPress={() => confirm()}
          >
            <IconUpload width="20" height="20" fill="#6294B2"/>
            <TextButton>Importar contatos do celular</TextButton>
          </LineButton>
      
        
        <LineButton
        onPress={()=> setOpen(true)}
        >
          <IconAdd width="20" height="20" fill="#6294B2"/>
          <TextButton>Criar novo contato</TextButton>
        </LineButton>
        </ButtonArea>
      
      <Flatlist
      data={userContacts}
      keyExtractor={(item) => (item.id)}
      renderItem={({item}) => renderOption(item)}
      />
      <Modal
      visible={open}
      onRequestClose={()=> {
        setOpen(!open)
    }}
      >
        <ModalHeader>
        <CloseButton onPress={() => {setOpen(!open)} }>
            <IconClose width="20" height="20" fill="#FFFFFF"/>
               </CloseButton>
        </ModalHeader>
        <ModalView>
        <TitleArea>
        <ImageArea>
        <ContactSvg  width="120" height="90"/>    
        </ImageArea>  
           <TextTitle>
            Contatos
           </TextTitle>
       </TitleArea>
       <InputArea>
        <LineInput
        IconSvg={IconUser}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        multipleLine={false}
        />
        <LineInput
        IconSvg={IconAdd}
        placeholder="Sobrenome"
        value={lastname}
        onChangeText={setLastname}
        multipleLine={false}
        />
        <LineInput
        IconSvg={IconPhone}
        placeholder="Telefone"
        value={phoneNumber}
        onChangeText={setPhone}
        multipleLine={false}
        />
        <LineInput
        IconSvg={IconMail}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        multipleLine={false}
        />
       </InputArea>
       
       
          <SmallCustomButton
          buttonName={"SALVAR"}
          onPress={handleCreateContact}
          />
       
      
        </ModalView>
      </Modal>

      
        </Container>
    )
}