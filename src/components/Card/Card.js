import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'components/Link/Link';
import Button from 'components/Button/Button';
import { connect } from 'react-redux';
import { removeCard } from 'actions';

const CardWrapper = styled.div`
   display:flex;
   flex-direction:column;
   height: 295px;
   width: 310px;
   margin-bottom: 50px;
   border-radius:5px;
   background-image: url(${(props) => props.imageUrl});
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
const Heading = styled.h1`
    color: white;
    text-align: uppercase;
    font-size:2.8rem;
`;
const Description = styled.p`
    margin:0 15px;
    line-height: 20px;
`;
const Card = ({
  id, name, link, imageUrl, description, status, removeCard,
}) => (
  <CardWrapper id={id} status={status} imageUrl={imageUrl}>
    <HeadingWrapper status={status}>
      <Heading>{name}</Heading>
    </HeadingWrapper>
    <ContentWrapper>
      <Description>{description}</Description>
      <Link href={link} target="_blank">{link}</Link>
      <Button onClick={() => removeCard(id)} remove><span /></Button>
    </ContentWrapper>
  </CardWrapper>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  link: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.oneOf(['unvisited', 'liked', 'notliked']),
  removeCard: PropTypes.func.isRequired,
};

Card.defaultProps = {
  name: '',
  link: '',
  imageUrl: '',
  description: '',
  status: 'unvisited',
};

const mapDispatchToProps = (dispatch) => ({
  removeCard: (id) => dispatch(removeCard(id)),
});

export default connect(null, mapDispatchToProps)(Card);
