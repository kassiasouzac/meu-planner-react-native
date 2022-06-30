import React, { useState,  useEffect } from "react";
import {Calendar} from 'react-native-calendars';
import WixCalendar from "../../../components/WixCalendar";
import DateRangePicker from "rnv-date-range-picker"
import moment from "moment";
import { api } from "../../../services/api";
import { Feather, AntDesign } from '@expo/vector-icons'
import { Container, Box, InternBox, LineArea, 
    ItemArea, AreaButton, ItemBorder, ItemDescription,
     ItemLineArea, BorderTitle, AreaTitle, PlusButton, SmallText,
    ModalCategory, ModalView, Modalheader, List, StepArea, Item, OptionRow} from "./styles";

import CircleTwoButtons from "../../../components/CircleTwoButtons";
import SmallCustomButton from "../../../components/SmallCustomButton";

import IconClock from "../../../assets/icons/clock.svg";
import IconEnvelop from "../../../assets/envelope.svg";
import Icontitle from "../../../assets/icons/file-lines-solid.svg"
import IconText from "../../../assets/icons/text.svg"
import IconCategory from '../../../assets/icons/category.svg'
import IconFrequency from '../../../assets/icons/frequency.svg'
import { ActivityIndicator, Alert } from "react-native";


export default ({navigation, route}) => {
    const id = route.params.id;
    const [title, setTitle] = useState('');
    const [motivation, setMotivation] = useState('');
    const categoryId = route.params.categoryId;
    const [category, setCategory] = useState();
    const [selected, setSelected] = useState({[route.params.days] : {selected:true, marked:true}});
    const [startDate, setStartDate] = useState();
    const [frequency, setFrequency] = useState([]);
    
    
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingB, setLoadingB] = useState(false);
    const [selectedRange, setRange] = useState({});
    const [value, setValue] = useState(new Date());
 
    

    useEffect(()=>{
        setLoadingB(true);
        
        async function loadHabit(){
            const response = await api.get('habit/detail', {params:{
                habitId: id
            }})
            setTitle(response.data[0].title);
            setMotivation(response.data[0].motivation);
            setFrequency(response.data[0].frequency[0].days);
            setStartDate(response.data[0].created_at);
        }
        
        async function findCategory(){
            const response = await api.get('category/detail', {
                params:{
                categoryId: categoryId
            }})
           setCategory(response.data[0].title);
            setLoadingB(false);
        }
        loadHabit();
        findCategory();
    },[id],[categoryId])

    function handleNavigation(){
        navigation.navigate('UpdateGoal')
   }

   async function handleRemoveGoal(){
        
        const response = await api.delete('/goal/remove', {
            params:{
                goalId: id
            }
        })

        setLoading(false);
        navigation.navigate('ListGoals')
   }



    function checkSelected(){

       console.log(selectedRange);
           Alert.alert("Meta Cumprida",
"",
           [
            {text: "Não", style:"cancel"},
              { text: "Sim", 
                onPress:()=>handleRemoveGoal()
            }
           ])
        
    }


    return(
        <Container>
          <CircleTwoButtons
                buttonName1={'Adicionar Alarme'} 
                buttonName2={'Ativar Notificações'}  
                IconSvg1={IconClock} 
                IconSvg2={IconEnvelop}
            />
        <AreaTitle>
        <BorderTitle>
            {title}
        </BorderTitle>

        </AreaTitle>
        {loadingB? (<ActivityIndicator size={95} color="#FFF"/>):(<ItemArea >     
              <ItemBorder>
                  <ItemLineArea>
                      <Icontitle width="16" height="16" fill="#FF985F"/>
                      <ItemDescription>{title}</ItemDescription>
                  </ItemLineArea>

                  <ItemLineArea>
                      <IconText width="16" height="16" fill="#FF985F"/>
                  <ItemDescription>{motivation}</ItemDescription>
                  </ItemLineArea>

                 
                  <ItemLineArea>
                      <IconCategory width="16" height="16" fill="#FF985F"/>
                  <ItemDescription>{category}</ItemDescription>
                  </ItemLineArea>

         </ItemBorder>
              
              </ItemArea> )}
            
              <PlusButton
                onPress={()=> setOpen(true)}
              >
              <IconFrequency width="16" height="16" fill="#FF985F"/>
            <SmallText>VER FREQUÊNCIA</SmallText>
          </PlusButton>
          <AreaButton>
          
           <SmallCustomButton
           buttonName={'EDITAR'}
           onPress={handleNavigation}
           />

           {loading?(<ActivityIndicator size={55} color="#FFF"/>):
           (<SmallCustomButton
           buttonName={'REMOVER'}
           onPress={handleRemoveGoal}
           />)}
            </AreaButton>

            <ModalCategory
                    animationType="slide"
                    visible={open}
                    onRequestClose={()=> {
                    setOpen(false)
                    }}
                >
            <Modalheader>
                <OptionRow>
                <AntDesign.Button backgroundColor="#ffffff" name="close" size={20} color="#ff985f" onPress={() => {setOpen(false); setRange([{}])}} />
                <AntDesign.Button backgroundColor="#ffffff" name="check" size={26} color="#CAE0CC" onPress={() => {setOpen(false); checkSelected()}} />
                </OptionRow>
                <BorderTitle>
            Dias em que cumpriu seus hábitos
        </BorderTitle>
             </Modalheader>
                <ModalView>
                    
                    <WixCalendar/>
                </ModalView>
        </ModalCategory>
                
        </Container>
    )
}