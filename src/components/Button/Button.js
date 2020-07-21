import styled, { css } from 'styled-components';
import { rotateButton } from 'theme/keyFrames';

const Button = styled.button`
position: relative;
height:80px;
width:80px;
background-color: ${({ theme }) => theme.button};
padding: 25px;
border: none;
border-radius: 50%;
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
    height:20px;
    width:20px;
    bottom:10px;
    right:10px;
    transform:rotate(45deg);
    animation: none;
    :hover{
        animation:none;
    }
    span{
    width: 25px;
    height: 4px;
    &::before{
        content:"";
        width: 25px;
        height: 4px;
    }
    `}
`;

export default Button;
