import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

const SearchInput = ({ onChange, onValueChange }) => (
  <Input placeholder="search" onChange={(e) => { onChange(); onValueChange(e); }} />
);

const mapDispatchToProps = (dispatch) => ({
  onChange: () => dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_SEARCHED',
  }),
  onValueChange: (e) => dispatch({
    type: 'SEARCH_CARD',
    value: e.target.value,
  }),
});

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SearchInput);
