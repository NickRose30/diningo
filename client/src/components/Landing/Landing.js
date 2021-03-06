import React, { Component } from 'react';
import RestaurantListings from '../../containers/RestaurantListings/RestaurantListings';
import ListingAside from '../../containers/ListingAside/ListingAside';
import styled from 'styled-components';
import * as R from 'ramda';
import ReactDOM from 'react-dom';

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
    asideBottomAlign: false,
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
    const landingClientRect = ReactDOM
      .findDOMNode(this.props.setRef.current)
      .getBoundingClientRect();
    const footerClientRect = ReactDOM
      .findDOMNode(this.props.footerRef.current)
      .getBoundingClientRect();
    const bottomAlign = window.innerHeight - footerClientRect.height + 60 > landingClientRect.bottom

    this.setState({
      stickyAside: itemTranslate && !bottomAlign,
      asideBottomAlign: bottomAlign,
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
          <ListingAside isSticky={this.state.stickyAside} alignBottom={this.state.asideBottomAlign} />
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