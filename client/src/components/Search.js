import React, { Component } from 'react';
import styled from 'styled-components';
import { colorBorderGray, colorBlack } from '../vars';

const SearchInput = styled.input`
  height: 40px;
  margin: 20px;
  font-size: 24px;
  border: none;
  border-bottom: 1.5px solid ${colorBorderGray};
  transition: border 500ms ease-out;

  :focus {
    outline: none;
    border-color: ${colorBlack};
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
        placeholder='Search...'
      />
    );
  }
}

export default Search;