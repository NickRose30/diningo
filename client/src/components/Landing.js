import React, { Component } from 'react';
import RestaurantListings from '../containers/RestaurantListings';
import ListingAside from '../containers/ListingAside';
import styled from 'styled-components';
import * as R from 'ramda';

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
`;

const ListingHeader = styled.h2`
  text-align: center;
`;

const ListingContainer = styled.div`
  display: flex;
`;

class Landing extends Component {
  state = {
    stickyAside: false,
  }
  landing = React.createRef();

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = () => {
    const offsetTop = this.props.setRef.current.offsetTop;
    const itemTranslate = (window.scrollY - 50) > offsetTop;

    this.setState({
      stickyAside: itemTranslate
    });
  };

  render() {
    const { searchResults } = this.props;
    const searchTerm = R.prop('searchTerm', searchResults);

    return (
      <LandingContainer ref={this.props.setRef}>
        <ListingHeader>
          {searchTerm ? `Search results for: ${searchTerm}` :
            'Recommended For You'}
        </ListingHeader>
        <ListingContainer>
          <ListingAside isSticky={this.state.stickyAside} />
          {this.state.stickyAside && 
            <ListingAside hidden isSticky={false} />
          }
          <RestaurantListings />
        </ListingContainer>
      </LandingContainer>
    );
  }
}

export default Landing;