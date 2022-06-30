import React from 'react';
import styled from 'styled-components/native';

const TitleArea = styled.View`
    width: 100%
    height: 90px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 5px;
    margin-top: 5px;
    
`;

const TextTitle = styled.Text`
    font-size: 30px;
    color:#FF985F;
    font-family: Pacifico-Regular;
    padding-right: 15px
`;


export default ({Title, EventSvg}) => {
    return(
       <TitleArea>
         <EventSvg  width="140" height="100"/>  
           <TextTitle>
            {Title}
           </TextTitle>
       </TitleArea>
    );
}