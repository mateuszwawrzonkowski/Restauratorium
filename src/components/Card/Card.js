import React from 'react';
import styled, {css} from 'styled-components';
import Heading from 'components/Heading/Heading.js';
import Description from 'components/Description/Description.js';
import Button from 'components/Button/Button.js';

const CardWrapper = styled.div`
   display:flex;
   flex-direction:column;
   height: 300px;
   width: 240px;
   border-radius:10px;
   background-image: url(https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93303605_513901102638363_4212623255288152064_o.jpg?_nc_cat=105&_nc_sid=dd9801&_nc_ohc=fwxx1cdksp0AX-rV2em&_nc_ht=scontent-waw1-1.xx&oh=acb18bd9f16e722462af7d91f5ad5433&oe=5F3A9FCF);
   background-size:cover;
   background-repeat:no-repeat;
   border: 3px solid ${({theme})=>theme.notvisited};
   :hover > *{
       opacity:1;
   }
   ${({liked})=>
    liked && css`
    border: 3px solid ${({theme})=>theme.liked};
    `
   }
   ${({notliked})=>
    notliked && css`
    border: 3px solid ${({theme})=>theme.notliked};
    `
   }
`      

const HeadingWrapper = styled.div`
display: flex;
justify-content:center;
align-items: center;
height: 50px;
width: 100%;
background-color: ${({theme})=>theme.notvisited};
${({liked})=>
    liked && css`
    background-color: ${({theme})=>theme.liked};
    `
   }
   ${({notliked})=>
    notliked && css`
    background-color: ${({theme})=>theme.notliked};
    `
   }
`;

const ContentWrapper = styled.div`
    display: flex;
    position:relative;
    height: 100%;
    width: 100%;
    color: white;
    justify-content: center;
    align-items:center;
    text-align:center;
    background-color: #00000099;
    opacity:0;
    transition:0.4s;
`;

const Card = () => (
    <CardWrapper>
       <HeadingWrapper>
         <Heading>KURA</Heading>
       </HeadingWrapper>
       <ContentWrapper>
             <Description>Restaurant with the best chicken in the world</Description>
            <Button remove><span/></Button>
        </ContentWrapper>
    </CardWrapper>
);

export default Card;