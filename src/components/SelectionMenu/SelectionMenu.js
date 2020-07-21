import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    position: relative;
    justify-content: space-evenly;
    align-items: center;
    width: 1165px;
    height: 70px;
    background-color: ${({ theme }) => theme.backgroundTransparent};
    border-radius: 45px;
`;

const SelectionButton = styled.button`
  display:flex;
  justify-content:center;
  flex-basis:33.33%;
  color: ${({ theme }) => theme.unvisited};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 3.6rem;
  font-weight:${({ theme }) => theme.bold};
  text-transform: uppercase;
  cursor: pointer;
  background-color:transparent;
  border:none;
  outline:none;
  transition:0.4s;
      :first-child{
      color: ${({ theme }) => theme.liked};
    }
      :last-child{
        color: ${({ theme }) => theme.notliked};
    }
    :hover{
      transform:scale(1.15);
    }
`;
const Line = styled.span`
    position: absolute;
    display:block;
    left: 33.33%;
    top:50%;
    transform: translate(-50%,-50%);
    height: 20px;
    width:3px;
    background-color: #57A8FF;
    :nth-child(2){
      left: 66.66%;
    }
`;

const SelectionMenu = () => (
  <Wrapper>
    <SelectionButton>liked</SelectionButton>
    <Line />
    <SelectionButton>unvisited</SelectionButton>
    <Line />
    <SelectionButton>not liked</SelectionButton>
  </Wrapper>
);

export default SelectionMenu;
