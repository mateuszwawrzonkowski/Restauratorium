import React from 'react';
import styled from 'styled-components';
import searchIcon from 'assets/search-solid.svg';

const Input = styled.input`
    padding: 10px 20px 10px 50px;
    margin: 24px 0 16px 0;
    font-size: 1.6rem;
    font-weight: ${({ theme }) => theme.bold};
    background-color: ${({ theme }) => theme.backgroundTransparent};
    color: white;
    border-radius: 20px;
    border: none;
    background-image: url(${searchIcon});
    background-size:25px;
    background-position:15px 50%;
    background-repeat:no-repeat;

    ::placeholder{
      text-transform: uppercase;
      font-size: 1.6rem;
      color: white;
      letter-spacing: 1px;
    }
    :focus{
        outline: none;
    }
    :focus::placeholder {
     color: transparent;
    }
`;

const SearchInput = () => (
  <Input placeholder="search" />
);

export default SearchInput;
