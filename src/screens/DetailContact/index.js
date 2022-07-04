import React, { useState,  useEffect } from "react";
import { Linking } from "react-native";

import { api } from "../../services/api";
import { Container, Circle, 
    Area, ItemTitle, TextArea, Text, Name, AreaTitle, Modal, ModalHeader, 
    ModalView, CloseButton, TitleArea, ImageArea, TextTitle, InputArea, LineContact} from "./styles";


import CircleTwoButtons from "../../components/CircleTwoButtons";
import SmallCustomButton from "../../components/SmallCustomButton";
import LineInput from "../../components/LineInput";

import IconUser from '../../assets/icons/user.svg';
import IconMail from "../../assets/icons/at.svg"
import IconText from "../../assets/icons/text.svg"
import IconPhone from  '../../assets/icons/phone.svg'
import IconWpp from '../../assets/icons/whatsapp.svg'
import IconEdit from '../../assets/icons/pencil.svg'
import IconTrash from '../../assets/icons/trash.svg'
import IconClose from '../../assets/icons/close.svg'
import ContactSvg from '../../assets/contact.svg'
import IconAdd from '../../assets/icons/user-plus.svg'

import { ActivityIndicator} from "react-native";


export default ({navigation, route}) => {
    const contactId = route.params.id;
    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [phoneNumber, setPhone] = useState();
    const [email, setEmail] = useState();
    const [loading, setLoading] = useState(false);
    const [loadingB, setLoadingB] = useState(false);
    const [open, setOpen] = useState(false);

    

    useEffect(()=>{
        setLoadingB(true)
        async function load(){
            
           setName(route.params.name);
           setLastname(route.params.lastname);
           setEmail(route.params.email);
           setPhone(route.params.phoneNumber);
           setLoadingB(false);
        }
        load();
            
        },[route.params.name],[route.params.lastname], [route.params.email], [route.params.phoneNumber])


   async function handleRemoveContact(){
        setLoading(true);
        const response = await api.delete('/contact/remove', {
            params:{
                contactId: id
            }
        })

        setLoading(false);
        navigation.navigate('Contact')
   }

    async function handleUpdateContact(){
        if(name === '' || lastname === '' || phoneNumber === ''){
            alert("Preencha os campos obrigatórios");
            return;
          }
          setOpen(false);
          setLoading(true);
          const response = await api.put('/contact/edit',{
            contactId,
            name,
            lastname,
            phoneNumber,
            email
          })

          setLoading(false);

    }


    return(
        <Container>
       
        <AreaTitle>
        <Circle>
        <IconUser width="65" height="65" fill="#FFFFFF"/>
        </Circle>
        <Name>
            {name}
        </Name>
    </AreaTitle>
        {loadingB?(<ActivityIndicator size={55} color="#FFF"/>):(
            <Area>
            <ItemTitle>
                Dados do contato
            </ItemTitle>
            <TextArea>
                <IconText width="20" height="20" fill="#FF985F"/>
                <Text>{name} {lastname}</Text>
            </TextArea>
            <TextArea>
                <IconPhone width="20" height="20" fill="#FF985F"/>
                <Text>{phoneNumber}</Text>
            </TextArea>
            <TextArea>
                <IconMail width="20" height="20" fill="#FF985F"/>
                <Text>{email}</Text>
            </TextArea>
            <TextArea
            onPress={()=> Linking.canOpenURL("whatsapp://send?text=oi").then(supported => {
                if(supported){
                    return Linking.openURL("whatsapp://send?phone=${phoneNumber}&text=${text}"); 
                }else{
                    return Linking.openURL("https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}"); 
                }
            })}
            >
                <IconWpp width="20" height="20" fill="#25D366"/>
                <Text>Conversar no Whatsapp</Text>
            </TextArea>
            </Area>
        )}
       
          {loading?(<ActivityIndicator size={55} color="#FFF"/>):(
            <CircleTwoButtons
            buttonName1={"Editar contato"}
            IconSvg1={IconEdit}
            buttonName2={"Remover contato"}
            IconSvg2={IconTrash}
            onPress1={() => setOpen(true)}
            onPress2={handleRemoveContact}
          />
          )} 
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
          onPress={handleUpdateContact}
          />
       
      
        </ModalView>
      </Modal>
        </Container>
    )
}