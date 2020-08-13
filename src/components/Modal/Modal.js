import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Form from 'components/Form/Form';
import Button from 'components/Button/Button';

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
    z-index: 999;
`;

const Modal = ({ isShowing, toggle }) => (
  isShowing && (
    <>
      <ModalWrapper>
        <Button onClick={toggle} close><span /></Button>
        <Form />
      </ModalWrapper>
    </>
  )
);

Modal.propTypes = {
  isShowing: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  isShowing: false,
};

export default Modal;
