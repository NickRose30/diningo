import React, { Component } from 'react';
import GoogleMaps from './GoogleMaps';
import * as R from 'ramda';
import styled from 'styled-components';
import { DefaultBtn } from '../sharedAssets';
import { colorDefaultDarkOrange, colorDefaultOrange, colorWhite } from '../vars';

const POPULARITY = 0;
const LOCATION = 1;
const PRICE = 2;
const RATING = 3;

const AsideContainer = styled.div`
  margin-top: 20px;
`;

const UpperAside = styled.div`
  border: 1px solid ${colorDefaultDarkOrange};
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const SortBtn = styled(DefaultBtn)`
  margin: 5px;
  ${props => props.selected ? 
    `background-color : ${ colorDefaultOrange };
    color: ${ colorWhite }` :
    `color: ${ colorDefaultOrange };`
  }
`;

class ListingAside extends Component {
  state = {
    selectedSort: POPULARITY,
  }

  isSelected = input => R.equals(R.prop('selectedSort', this.state), input);

  handleSelection = newSelection => e => {
    e.preventDefault();
    this.setState({ selectedSort: newSelection });
  }

  render() {
    const points = this.props.results ? this.props.results.map(listing => (
      { lat: listing.lat, lng: listing.lng }
    )) : [];

    return (
      <AsideContainer>
        <UpperAside>
          <span>Sort by:</span>
          <SortBtn
            to='#'
            selected={this.isSelected(POPULARITY)}
            onClick={this.handleSelection(POPULARITY)}
          >Popularity</SortBtn>
          <SortBtn
            to='#'
            selected={this.isSelected(LOCATION)}
            onClick={this.handleSelection(LOCATION)}
          >Location</SortBtn>
          <SortBtn
            to='#'
            selected={this.isSelected(PRICE)}
            onClick={this.handleSelection(PRICE)}
          >Price</SortBtn>
          <SortBtn
            to='#'
            selected={this.isSelected(RATING)}
            onClick={this.handleSelection(RATING)}
          >Rating</SortBtn>
        </UpperAside>
        <GoogleMaps
          height={300}
          width={300}
          points={points}
          currentLocation
        />
      </AsideContainer>
    );
  }
}

export default ListingAside;