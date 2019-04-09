import React, { Component } from 'react';
import styled from 'styled-components';
import { colorWhite, colorTransparentGray2, colorTransparentBlack } from '../vars';

const SearchInput = styled.input`
  height: 40px;
  margin: auto auto;
  font-size: 24px;
  border: none;
  padding: 0 5px;
  transition: background 500ms ease-out;
  background: ${colorTransparentGray2};
  width: 65%
  min-width: 300px;

  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: ${colorTransparentBlack};
  }

  :focus {
    outline: none;
    background: ${colorWhite};
  }
`;

class Search extends Component {
  state = {
    input: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <SearchInput
        onChange={this.handleChange}
        name='input'
        type='text'
        value={this.state.input}
        placeholder='Search for a restaurant...'
      />
    );
  }
}

export default Search;