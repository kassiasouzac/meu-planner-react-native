import React, { useState, useContext } from "react";

import LineInput from "../../../../components/LineInput";
import SmallCustomButton from "../../../../components/SmallCustomButton";

import Goals from '../../../../assets/goals.svg';
import IconStep from '../../../../assets/icons/steps.svg';
import { FontAwesome } from "@expo/vector-icons";



import { Container, InputArea, TitleArea, 
    TextTitle, PlusButton, SmallText, ScrollArea, InputLine, InputBorder, LineInputArea } from './styles'; 
import { TouchableOpacity } from "react-native-gesture-handler";


export default () => {

    const [stepField, setStepField] = useState('');
    const [inputs, setInputs] = useState([{key: '', value: ''}]);
    let _number = 2;

    const addHandler = ()=>{
        const _inputs = [...inputs];

        _inputs.push({key:'', value: ''});
        setInputs(_inputs);
        
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
  
    return (
        <Container>
        <TitleArea>

         <Goals  width="230" height="230" style={{padding:0}}/>  

           <TextTitle>
            Passos para 
            {'\n'}
            atingir a meta
           </TextTitle>
            </TitleArea>
            
            <InputArea>

                <ScrollArea>
                    <InputArea>
                    <LineInput
                    IconSvg={IconStep} 
                    placeholder="1 -"
                    value={stepField}
                    onChangeText={setStepField}
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

                    <PlusButton
                    onPress={addHandler}
                    >
                <FontAwesome name="plus-circle" size={44} color="#FF985F"/>
                </PlusButton>

                <SmallText>Clique aqui para adicionar mais um passo</SmallText>
                    </InputArea>
                
                </ScrollArea>

                <SmallCustomButton
                    buttonName="SALVAR"
                ></SmallCustomButton>
                
            </InputArea>
        </Container>
    )
}