import styled, { css } from 'styled-components';
import { rotateButton } from 'theme/keyFrames';

const Button = styled.button`
position: fixed;
right: 10px;
bottom: 10px;
height:70px;
width:70px;
background-color: ${({ theme }) => theme.button};
padding: 25px;
border: none;
border-radius: 50%;
outline: none;
:hover{
        animation: ${rotateButton} 1.5s ease-in infinite;
        cursor: pointer;
    }
span{
    position: absolute;
    display:block;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width: 40px;
    height: 6px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.buttonCross};
    &::before{
        content:"";
        display:block;
        transform:rotate(90deg);
        width: 40px;
        height: 6px;
        border-radius: 2px;
        background-color: ${({ theme }) => theme.buttonCross};
    }
}

${({ remove }) => remove && css`
    position:absolute;
    height:35px;
    width:35px;
    bottom:10px;
    right:10px;
    padding:0;
    transform:rotate(45deg);
    animation: none;
    :hover{
        animation:none;
    }
    span{
    width: 20px;
    height: 4px;
    &::before{
        content:"";
        width: 20px;
        height: 4px;
    }
    `}

    ${({ close }) => close && css`
    position:absolute;
    height:35px;
    width:35px;
    top:10px;
    right:10px;
    padding:0;
    transform:rotate(45deg);
    animation: none;
    :hover{
        animation:none;
    }
    span{
    width: 20px;
    height: 4px;
    &::before{
        content:"";
        width: 20px;
        height: 4px;
    }
    `}

    ${({ modalAdd }) => modalAdd && css`
    height:35px;
    width: 85px;
    border-radius: 0px;
    font-size:2.4rem;
    font-weight:${({ theme }) => theme.bold};
    background-color: #F5D44F;
    color: #F2A034;
    text-transform: uppercase;
    padding:0;
    border-radius: 5px;
    :hover{
        animation:none;
    }
    `}
`;

export default Button;
