import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Button = styled.button`
  display:flex;
  justify-content:center;
  flex-basis:33.33%;
  color: ${({ theme }) => theme.unvisited};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  font-size: 3.6rem;
  font-weight:${({ theme }) => theme.bold};
  text-transform: uppercase;
  cursor: pointer;
  background-color:transparent;
  border:none;
  outline:none;
  transition:0.4s;
      :nth-child(1){
      color: ${({ theme }) => theme.liked};
    }
      :nth-child(5){
        color: ${({ theme }) => theme.notliked};
    }
      :nth-child(7){
        color: ${({ theme }) => theme.all};
    }
      :hover{
      transform:scale(1.15);
    }
`;

const SelectionButton = ({ onClick, active, children }) => (
  <Button
    onClick={onClick}
    disabled={active}
  >
    {children}
  </Button>
);

SelectionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  active: state.filter === ownProps.filter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: ownProps.filter,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectionButton);
