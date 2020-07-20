import styled from 'styled-components';

const Button = styled.button`
position: relative;
height:80px;
width:80px;
background-color: ${({ theme }) => theme.button};
padding: 25px;
border: none;
border-radius: 50%;

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
`;

export default Button;
