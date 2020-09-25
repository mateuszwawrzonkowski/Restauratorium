import React from 'react';
import styled from 'styled-components';
import { VisibilityFilters } from 'actions';
import SelectionButton from 'components/SelectionButton/SelectionButton';

const Wrapper = styled.div`
    display:flex;
    position: relative;
    justify-content: space-evenly;
    align-items: center;
    width: 1165px;
    height: 70px;
    background-color: ${({ theme }) => theme.backgroundTransparent};
    border-radius: 45px;
    margin-bottom: 45px;
`;
const Line = styled.span`
    position: absolute;
    display:block;
    left:25%;
    top:50%;
    transform: translate(-50%,-50%);
    height: 20px;
    width:3px;
    background-color: #57A8FF;
    :nth-child(4){
      left: 50%;
    }
    :nth-child(6) {
      left:75%;
}
    
`;

const SelectionMenu = () => (
  <Wrapper>
    <SelectionButton filter={VisibilityFilters.SHOW_LIKED}>liked</SelectionButton>
    <Line />
    <SelectionButton filter={VisibilityFilters.SHOW_UNVISITED}>unvisited</SelectionButton>
    <Line />
    <SelectionButton filter={VisibilityFilters.SHOW_NOTLIKED}>not liked</SelectionButton>
    <Line />
    <SelectionButton filter={VisibilityFilters.SHOW_ALL}>ALL</SelectionButton>
  </Wrapper>
);

export default SelectionMenu;
