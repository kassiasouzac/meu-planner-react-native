import React from 'react';
import styled from 'styled-components/native';

const TitleArea = styled.View`
    width: 100%
    height: 90px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 5px;
    margin-top: 10px;

`;

const TextTitle = styled.Text`
    font-size: 40px;
    color:#FF985F;
    font-family: Pacifico-Regular;
    padding-right: 20px
`;

const ImageArea = styled.View`
margin-left: 0px;
padding-top:10px;
`;


export default ({Title, EventSvg}) => {
    return(
       <TitleArea>
        <ImageArea>
        <EventSvg  width="180" height="140"/>    
        </ImageArea>  
           <TextTitle>
            {Title}
           </TextTitle>
       </TitleArea>
    );
}