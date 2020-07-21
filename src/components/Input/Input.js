import styled from 'styled-components';
import searchIcon from 'assets/search-solid.svg';

const Input = styled.input`
    padding: 10px 20px 10px 50px;
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.backgroundTransparent};
    color: ${({ theme }) => theme.background};
    border-radius: 20px;
    border: none;
    background-image: url(${searchIcon});
    background-size:25px;
    background-position:15px 50%;
    background-repeat:no-repeat;

    ::placeholder{
      text-transform: uppercase;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.background};
    }
    :focus{
        outline: none;
    }
`;

export default Input;
