import styled from 'styled-components';

const Input = styled.input`
    padding:10px 20px;
    font-size: 2.4rem;
    background-color: ${({ theme }) => theme.backgroundTransparent};
    border-radius: 20px;
`;

export default Input;
