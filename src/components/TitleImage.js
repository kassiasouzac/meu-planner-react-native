import React from 'react';
import styled from 'styled-components/native';

const TitleArea = styled.View`
    width: 100%
    height: 90px;
    flex-direction: row;
    align-items: center;
    padding-left: 15px;
    margin-top: 35px;
    
`;

const TextTitle = styled.Text`
    font-size: 40px;
    color:#FF985F;
    font-family: Pacifico-Regular;
    margin-left: 50px;
`;


export default ({Title, EventSvg}) => {
    return(
       <TitleArea>
         <EventSvg  width="180" height="140"/>  
           <TextTitle>
            {Title}
           </TextTitle>
       </TitleArea>
    );
}