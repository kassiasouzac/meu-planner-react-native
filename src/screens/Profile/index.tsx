import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from '../../contexts/AuthContext';
import { Container, HeaderArea, View, Circle, InputArea, Line, 
    Input, InputBorder, PlusButton, SmallText , ButtonArea} from "./style";

import InputDate from "../../components/InputDate";

import IconUser from '../../assets/icons/user.svg';
import User from  '../../assets/user.svg';
import IconEmail from '../../assets/icons/at.svg'
import IconLogout from '../../assets/icons/logout.svg'; 
import IconEdit from '../../assets/icons/pencil.svg';
import IconTrash from '../../assets/icons/trash.svg';
import IconClose from '../../assets/icons/close.svg';
import IconAdd from '../../assets/icons/user-plus.svg';
import SmallCustomButton from "../../components/SmallCustomButton";
import { CloseButton, Modal, ModalHeader, ModalView, ViewP } from "../Contact/styles";
import LineInput from "../../components/LineInput";
import TitleImageList from "../../components/TitleImageList";
import { api } from "../../services/api";
import { ActivityIndicator, Alert } from "react-native";
import SignInput from "../../components/SignInput";
import { previousMonday } from "date-fns";

export default function Profile (){

    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [lastname, setLastname] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const { user, signOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const [openP, setOpenP] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        async function getUser(){
            //console.log(user.email);
            setName(user.name);
            setEmail(user.email);
            setLastname(user.lastname);
        }
        getUser();
    },[])

    async function handleLogout(){
        await signOut()
      }

    async function handleUpdate(){

        setLoading(true);
        const response = await api.put('/user/edit', {
            name, 
            lastname
        })

        setLoading(false);
        setOpen(false);
    }

    function alertUser(){
        Alert.alert("Uma pena você estar indo embora!",
            "Tem certeza que deseja excluir sua conta?",
           [
            {text: "Não", style:"cancel"},
              { text: "Sim", 
                onPress:()=>removeUser()
            }
           ])
    }

    async function removeUser(){
        setLoading(true)

        const response = await api.delete('/user/remove');
            await signOut();

    }

    async function handleChangePassword(){
        try{
            if(password === ''|| oldPassword === ''){
                alert("Preencha os campos obrigatórios");
                return;
            }
            setLoading(true);
    
            const response = await api.put('/update/password',{
                password: password,
                oldPassword: oldPassword
            })
            console.log(response.status);
            
                alert("Senha alterada! Você terá que logar novamente")
                setLoading(false);
                setOpenP(false);
                await signOut();
            }catch(error){
            alert("Erro ao alterar senha! Verifique se sua senha está correta");
            console.log(error);
            setLoading(false);
            return;
        }
        
    }

return(
    <Container>
        <HeaderArea>
        <TitleImageList
        Title={"Seu Perfil"}
        EventSvg={User}
        />
        </HeaderArea>
        <View
        
        >
            <InputArea>
            <Line>
            <IconUser width="24" height="24" fill="#FF985F" />
            <InputBorder>
            <Input>
            {name} {lastname}
            </Input>
            </InputBorder>
        </Line>
        <Line>
            <IconEmail width="24" height="24" fill="#FF985F" />
            <InputBorder>
            <Input>
            {email}
            </Input>
            </InputBorder>
        </Line>
        </InputArea>

        <ButtonArea>
        <PlusButton
                onPress={()=> setOpen(true)}
                >
                <IconEdit width="16" height="16" fill="#FF985F"/>
              <SmallText>EDITAR</SmallText>
            </PlusButton>
            <PlusButton
                 onPress={() => handleLogout()}
                >
                <IconLogout width="16" height="16" fill="#FF985F"/>
              <SmallText>LOGOUT</SmallText>
            </PlusButton>
            <PlusButton
                  onPress={()=> alertUser()}
                >
                <IconTrash width="16" height="16" fill="#FF985F"/>
              <SmallText>EXCLUIR CONTA</SmallText>
            </PlusButton>
            <PlusButton
                  onPress={()=> setOpenP(true)}
                >
                <IconEdit width="16" height="16" fill="#FF985F"/>
              <SmallText>TROCAR A SENHA</SmallText>
            </PlusButton>
        </ButtonArea>
        </View>

        <Modal
        visible={openP}
        onRequestClose={()=> setOpenP(false)}
        >
            <ModalHeader>
                <CloseButton onPress={() => {setOpenP(!openP)} }>
            <IconClose width="20" height="20" fill="#FFFFFF"/>
                </CloseButton>
            </ModalHeader>
            <ModalView>
                <TitleImageList
                Title={"Seus dados"}
                EventSvg={User}
                />
            <InputArea style={{marginTop: 60, marginBottom:40}}>
        <SignInput
        placeholder="Antiga senha"
        value={oldPassword}
        onChangeText={setOldPassword}
        password={true}
        />
        <SignInput
        
        placeholder="Nova senha"
        value={password}
        onChangeText={setPassword}
        password={true}
        />
        
       </InputArea>

       <ButtonArea>
       {loading?(<ActivityIndicator size={55} color="#FFF"/>):(
        <SmallCustomButton
       buttonName={"SALVAR"}
       onPress={handleChangePassword}
       />
       )}
       
       </ButtonArea>
       
            </ModalView>
        </Modal>
        <Modal
        visible={open}
        onRequestClose={()=> setOpen(false)}
        >
            <ModalHeader>
                <CloseButton onPress={() => {setOpen(!open)} }>
            <IconClose width="20" height="20" fill="#FFFFFF"/>
                </CloseButton>
            </ModalHeader>
            <ModalView>
                <TitleImageList
                Title={"Seus dados"}
                EventSvg={User}
                />
            <InputArea style={{marginTop: 60, marginBottom:40}}>
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
        
       </InputArea>

       <ButtonArea>
       {loading?(<ActivityIndicator size={55} color="#FFF"/>):(
        <SmallCustomButton
       buttonName={"SALVAR"}
       onPress={handleUpdate}
       />
       )}
       
       </ButtonArea>
       
            </ModalView>
        </Modal>
    </Container>
)
}