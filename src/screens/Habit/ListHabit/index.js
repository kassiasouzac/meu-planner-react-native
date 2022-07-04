import React, { useState,  useEffect } from "react";
import { format, parseISO } from "date-fns";
import WixCalendar from "../../../components/WixCalendar";
import { api } from "../../../services/api";
import { AntDesign } from '@expo/vector-icons'
import { Container, 
    ItemArea, AreaButton, ItemBorder, ItemDescription,
     ItemLineArea, BorderTitle, AreaTitle, PlusButton, SmallText,
    ModalCategory, ModalView, Modalheader, OptionRow} from "./styles";

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
    const [startDate, setStartDate] = useState();
    const [dateString, setDateString] = useState(); 
    const [frequency, setFrequency] = useState({
        days:[]
    });
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingB, setLoadingB] = useState(false);
    const [data, setData] = useState([]);
    let days = route.params.days;
    let mark = {};
 
        days.forEach(day => {
            mark[day] = {selected:true, marked: true};
        })
    

    useEffect(()=>{
        setLoadingB(true);
        navigation.addListener('focus', async () => {
            loadHabit();
            findCategory();
        })
        async function loadHabit(){
            const response = await api.get('habit/detail', {params:{
                habitId: id
            }})
            setTitle(response.data[0].title);
            setMotivation(response.data[0].motivation);
            setStartDate(response.data[0].created_at);
            //setDateString(format(parseISO(startDate), "yyyy-MM-dd"));
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

    function receiveData(selected){
        setData([...days]);
       selected.forEach(day =>{
        data.push(day)
       })
        setFrequency([{days:data}]);
    }
    
    function handleNavigation(){
        navigation.navigate('UpdateHabit',{id, motivation, categoryId, title})
   }

   async function handleUpdateFrequency(){
    setLoadingB(true)
    const response = await api.put('/habit/frequency',{
        habitId: id,
        frequency:frequency
    })
    setLoadingB(false);

   }

   async function handleRemoveHabit(){
        
        const response = await api.delete('/habit/remove', {
            params:{
                habitId: id
            }
        })

        setLoading(false);
        navigation.navigate('ListHabits')
   }

    function checkSelected(){
           Alert.alert("Dias Cumpridos",
            "Deseja atualizar os dias em que cumpriu seu hábito?",
           [
            {text: "Não", style:"cancel"},
              { text: "Sim", 
                onPress:()=>handleUpdateFrequency()
            }
           ])
        
    }

    return(
        <Container>
         
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
           onPress={handleRemoveHabit}
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
                <AntDesign.Button backgroundColor="#ffffff" name="close" size={20} color="#ff985f" onPress={() => setOpen(false)} />
                <AntDesign.Button backgroundColor="#ffffff" name="check" size={26} color="#CAE0CC" onPress={() => {setOpen(false); checkSelected()}} />
                </OptionRow>
                <BorderTitle>
            Dias em que cumpriu seus hábitos
        </BorderTitle>
             </Modalheader>
                <ModalView>
                    
                    <WixCalendar
                    initialState={mark}
                    receiveData={receiveData}
                    minDate={startDate}
                    />
                </ModalView>
        </ModalCategory>
                
        </Container>
    )
}