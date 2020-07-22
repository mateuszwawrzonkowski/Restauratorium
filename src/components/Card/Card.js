import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/Heading/Heading';
import Description from 'components/Description/Description';
import Link from 'components/Link/Link';
import Button from 'components/Button/Button';

const CardWrapper = styled.div`
   display:flex;
   flex-direction:column;
   height: 295px;
   width: 310px;
   border-radius:5px;
   background-image: url(https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93303605_513901102638363_4212623255288152064_o.jpg?_nc_cat=105&_nc_sid=dd9801&_nc_ohc=fwxx1cdksp0AX-rV2em&_nc_ht=scontent-waw1-1.xx&oh=acb18bd9f16e722462af7d91f5ad5433&oe=5F3A9FCF);
   background-size:cover;
   background-repeat:no-repeat;
   border: 3px solid ${({ status, theme }) => (status ? theme[status] : theme.unvisited)};
   :hover > *{
       opacity:1;
   }
`;

const HeadingWrapper = styled.div`
display: flex;
justify-content:center;
align-items: center;
height: 50px;
width: 100%;
background-color: ${({ status, theme }) => (status ? theme[status] : theme.unvisited)};
`;

const ContentWrapper = styled.div`
    display: flex;
    position:relative;
    height: 100%;
    width: 100%;
    font-size: 1.4rem;
    color: white;
    justify-content: center;
    align-items:center;
    align-content: space-evenly;
    text-align:center;
    flex-wrap:wrap;
    background-color: #00000099;
    opacity:0;
    transition:0.4s;
    font-weight: ${({ theme }) => theme.medium};
`;

const Card = ({ status }) => (
  <CardWrapper status={status}>
    <HeadingWrapper status={status}>
      <Heading>KURA</Heading>
    </HeadingWrapper>
    <ContentWrapper>
      <Description>Restaurant with the best chicken in the world</Description>
      <Link href="https://www.facebook.com/restauracjakura">https://www.facebook.com/restauracjakura</Link>
      <Button remove><span /></Button>
    </ContentWrapper>
  </CardWrapper>
);

Card.propTypes = {
  status: PropTypes.oneOf(['unvisited', 'liked', 'notliked']),
};

Card.defaultProps = {
  status: 'unvisited',
};

export default Card;
