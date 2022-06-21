import React from 'react';
import styled from 'styled-components/native';

const TitleArea = styled.View`
    width: 100%
    height: 80px;
    padding-left: 25px;
    margin-top: 0px;
    margin-bottom: 35px;
`;

const TextTitle = styled.Text`
    font-size: 40px;
    color:#FF985F;
    font-family: Pacifico-Regular;
`;

export default ({Title}) => {
    return(
       <TitleArea>
           <TextTitle>
            {Title}
           </TextTitle>
       </TitleArea>
    );
}