import React, { Component } from 'react';
import styled from 'styled-components';
import { colorWhite, colorTransparentGray2, colorTransparentBlack } from '../vars';

const SearchForm = styled.form`
  margin: auto auto;
  width: 65%;
  min-width: 300px;
`;

const SearchInput = styled.input`
  height: 40px; 
  font-size: 24px;
  border: none;
  padding: 0 5px;
  transition: background 500ms ease-out;
  background: ${colorTransparentGray2};
  width: 100%;

  ::-webkit-input-placeholder {
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

  handleSubmit = e => {
    e.preventDefault();
    this.setState({input: ''});
  };

  render() {
    return (
      <SearchForm onSubmit={this.handleSubmit}>
        <SearchInput
          onChange={this.handleChange}
          name='input'
          type='text'
          value={this.state.input}
          placeholder='Search for a restaurant...'
        />
      </SearchForm>
    );
  }
}

export default Search;