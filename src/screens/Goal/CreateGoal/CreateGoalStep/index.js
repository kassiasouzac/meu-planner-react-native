import React, { useState, useEffect } from "react";
import { api } from '../../../../services/api'

import LineInput from "../../../../components/LineInput";
import SmallCustomButton from "../../../../components/SmallCustomButton";

import Goals from '../../../../assets/goals.svg';
import IconStep from '../../../../assets/icons/steps.svg';
import { FontAwesome } from "@expo/vector-icons";



import { Container, InputArea, TitleArea, 
    TextTitle, PlusButton, SmallText, ScrollArea, ButtonArea, InputLine, InputBorder, LineInputArea } from './styles'; 
import { TouchableOpacity } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native";


export default ({navigation, route}) => {

    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState([{key: '', value: ''}]);
    let _number = 2;

    const addHandler = ()=>{
        const _inputs = [...inputs];
        if(_number >= 6){
            alert('Não é permitido adicionar mais passos!')
        }

        _inputs.push({key:'', value: ''});
        setInputs(_inputs);
        console.log(inputs);
    }

    const inputHandler = (text, key)=>{
        const _inputs = [...inputs];
        _inputs[key].value = text;
        _inputs[key].key   = key;
        setInputs(_inputs);
        console.log(inputs);
        
      }

      const deleteHandler = (key)=>{
        const _inputs = [...inputs];
        let index = inputs.findIndex(i=> i ?.key === key);
        _inputs.splice(index, 1);
        setInputs(_inputs);
        
    }

    async function handleCreateSteps(number, value, goalId ){
            const response = await api.post('/step',{
                number,
                value,
                goalId
            })
    }

    async function handleCreateGoal(){
       
        setLoading(true);

        const get = await api.get('/planning');
        const planningId = get.data.planning.id;
        const title = route.params.title;
        const description = route.params.description;
        const startDate = route.params.startDate;
        const endDate = route.params.endDate;
        const categoryId = route.params.categoryId;

        const response = await api.post('/goal', {
            title,
            description,
            startDate,
            endDate,
            planningId,
            categoryId,
        })

        const goalId = response.data.goal.id;

        await handleCreateSteps(1, value, goalId);

        if(inputs.length > 0){
               await inputs.forEach(function(step){
                const number = step.key + 2;
                handleCreateSteps(number, step.value, goalId);
              });
        }

        navigation.navigate('Home');
        setValue('');
        setInputs([{key: '', value: ''}]);
        _number = 2;
        setLoading(false);
    }
  
    return (
        <Container>
        <TitleArea>

         <Goals  width="120" height="120" style={{padding:0}}/>  

           <TextTitle>
            Passos para 
            {'\n'}
            atingir a meta
           </TextTitle>
            </TitleArea>
            
           

                <ScrollArea>
                    <InputArea>
                    <LineInput
                    IconSvg={IconStep} 
                    placeholder="1 -"
                    value={value}
                    onChangeText={setValue}
                    />
                    
                    {inputs.map((input, key)=>(
                    <LineInputArea>
                    <IconStep width="24" height="24" fill="#FF985F"/>
                    <InputBorder>
                    <InputLine
                        placeholder={_number++ + " -"}
                        placeholderTextColor="#A69C9C"
                        value={input.value}
                        onChangeText={(text)=>inputHandler(text, key)}
                    />
                    </InputBorder>
                    <TouchableOpacity onPress={deleteHandler}>
                    <FontAwesome name="minus-circle" size={24} color="#FF985F" />
                    </TouchableOpacity>
                    </LineInputArea>
                    ))}

                
                    </InputArea>
                
                </ScrollArea>
                <ButtonArea>
                <PlusButton
                    onPress={addHandler}
                    >
                <FontAwesome name="plus-circle" size={44} color="#FF985F"/>
                </PlusButton>

                <SmallText>Clique aqui para adicionar mais um passo</SmallText>
                {loading?(<ActivityIndicator size={55} color="#FFF"/>):(
                    <SmallCustomButton
                    buttonName="SALVAR"
                    onPress={handleCreateGoal}
                    ></SmallCustomButton>
                )}

                </ButtonArea>
            
        </Container>
    )
}