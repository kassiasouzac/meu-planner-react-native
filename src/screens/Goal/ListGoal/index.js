import React, { useState, useContext, useEffect } from "react";
import { format, parseISO } from 'date-fns';
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
import IconCalendar from "../../../assets/icons/calendar.svg"
import IconCategory from '../../../assets/icons/category.svg'
import IconStep from '../../../assets/icons/steps.svg'
import { ActivityIndicator, Alert } from "react-native";


export default ({navigation, route}) => {
    const id = route.params.id;
    const title = route.params.title;
    const description = route.params.description;
    const startDate = route.params.startDate
    const startDateString = format(parseISO(startDate),"dd/MM/yyyy") ;
    const endDate = route.params.endDate;
    const endDateString =format(parseISO(endDate), "dd/MM/yyyy") ;
    const categoryId = route.params.categoryId;
    const [steps, setSteps] = useState();

    const [category, setCategory] = useState();
    const [selected, setSelected] = useState([]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        navigation.addListener('focus', async () => {
            loadSteps();
        })
        async function loadSteps(){
            
            const response = await api.get('/steps',{
                params:{
                    goalId: id
                }
            })
            setSteps(response.data.step);
            console.log(response.data.step);
        }
        async function findCategory(){
            const response = await api.get('category/detail', {params:{
                categoryId: categoryId
            }})
           setCategory(response.data[0].title);
            setLoading(false);
        }
        loadSteps();
        findCategory();
    },[categoryId])

    function handleNavigation(){
        navigation.navigate('UpdateGoal', {title, description, startDate, id, 
            startDateString, endDate, endDateString, categoryId, steps})
   }

   async function handleRemoveGoal(){
        setLoading(true);
        const kill = await api.delete('/steps/remove',{
            params:{
                goalId: id
            }
        })
        const response = await api.delete('/goal/remove', {
            params:{
                goalId: id
            }
        })

        setLoading(false);
        navigation.navigate('ListGoals')
   }


    function toggleSelection(item){
    let index = selected.findIndex(i=> i?.id === item?.id);
    let arrSelected = [...selected];
    if(index !== -1){
        arrSelected.splice(index, 1);
    }else{
        arrSelected.push(item);  
    }
    setSelected(arrSelected);
    console.log(arrSelected);
    }

    function checkSelected(){

        if(steps.length === selected.length){
           Alert.alert("Meta Cumprida",
"Parabéns! Você cumpriu todos os passos para alcançar sua meta. Deseja encerrar a meta agora?",
           [
            {text: "Não", style:"cancel"},
              { text: "Sim", 
                onPress:()=>handleRemoveGoal()
            }
           ])
        }
    }

   function renderOption(item){
    console.log(item);
    return(
         <StepArea onPress={()=> toggleSelection(item)}
         style={{backgroundColor:selected?.findIndex(i=>i.id === item.id) !== -1 ? 
            'rgba(202, 224, 204, 0.27)' : 'rgba(249, 248, 248, 0.74)'}}
           >
             
             {selected?.findIndex(i=>i.id === item.id) !== -1 ? (
                <AntDesign name="checksquare" size={24} color="#80D489"  />
            ):(<Feather name="square" size={24} color="rgba(246, 180, 118, 0.54)" />)}

             <Item>{item.number}  -  {item.value} </Item>
        </StepArea>
    )
   }

    return(
        <Container>
    
        <AreaTitle>
        <BorderTitle>
            {title}
        </BorderTitle>

        </AreaTitle>
            <ItemArea >     
              <ItemBorder>
                  <ItemLineArea>
                      <Icontitle width="16" height="16" fill="#FF985F"/>
                      <ItemDescription>{title}</ItemDescription>
                  </ItemLineArea>

                  <ItemLineArea>
                      <IconText width="16" height="16" fill="#FF985F"/>
                  <ItemDescription>{description}</ItemDescription>
                  </ItemLineArea>

                  <LineArea>
                 <Box>
                 <InternBox><IconCalendar width="16" height="16" fill="#FF985F"/></InternBox>
                  <ItemDescription>{startDateString}</ItemDescription>
                 </Box>
                 <Box>
                 <InternBox><IconCalendar width="16" height="16" fill="#FF985F"/></InternBox>
                  <ItemDescription>{endDateString}</ItemDescription>
                 </Box>  
                  </LineArea>
                  <ItemLineArea>
                      <IconCategory width="16" height="16" fill="#FF985F"/>
                  <ItemDescription>{category}</ItemDescription>
                  </ItemLineArea>

         </ItemBorder>
              
              </ItemArea> 
              <PlusButton
                onPress={()=> setOpen(true)}
              >
              <IconStep width="16" height="16" fill="#FF985F"/>
            <SmallText>VER PASSOS</SmallText>
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
                <AntDesign.Button backgroundColor="#ffffff" name="close" size={20} color="#ff985f" onPress={() => {setOpen(false); setSelected([])}} />
                <AntDesign.Button backgroundColor="#ffffff" name="check" size={26} color="#CAE0CC" onPress={() => {setOpen(false); checkSelected()}} />
                </OptionRow>
                <BorderTitle>
            Passos para alcançar a meta
        </BorderTitle>
             </Modalheader>
                <ModalView>
                    <List
                    data={steps}
                    keyExtractor={(item) => (item.id)}
                    renderItem={({item}) => renderOption(item)}
                    />
                </ModalView>
        </ModalCategory>
                
        </Container>
    )
}