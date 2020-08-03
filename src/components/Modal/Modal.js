import React from 'react';
import styled from 'styled-components';
import Form from 'components/Form/Form';

const ModalWrapper = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    height: 500px;
    width: 450px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #CEF6FF;
    border: 5px solid #006299;
    border-radius:5px;
`;

const Modal = () => (
  <ModalWrapper>
    <Form />
  </ModalWrapper>
);

export default Modal;
