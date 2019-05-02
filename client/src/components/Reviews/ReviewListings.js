import React, { Component } from 'react';
import styled from 'styled-components';
import ReviewCard from './ReviewCard';
import { colorDefaultDarkOrange } from '../../vars';
import { DefaultBtn } from '../../sharedAssets';
import Modal from 'react-responsive-modal';

const ListingsContainer = styled.div`
  width: 100%;
`;

const Header = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`;

const ReviewContainer = styled.div`
  display: flex;
  max-width: 800px;
`;

const OptionPanel = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px;
  flex: 1 1 0;
`;

const MiddleHr = styled.hr`
  width: 1px;
  border: none;
  border-left: 1px solid ${colorDefaultDarkOrange};
  margin: 15px;
`;

class ReviewListings extends Component {
  state = {
    open: false,
  };

  onOpenModal = e => {
    e.preventDefault();
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const reviewCards = this.props.reviews ? this.props.reviews.map((review, i) => (
      <ReviewCard {...review} key={i} />
    )) : [];

    return (
      <ListingsContainer>
        <Header>
          <h3>Reviews</h3>
          <DefaultBtn to='#' onClick={this.onOpenModal}>Leave a review</DefaultBtn>
        </Header>
        {reviewCards}
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <ReviewContainer>
            <OptionPanel>
              <h3>Please log in to view your recent orders.</h3>
              <input type='text'></input>
              <input type='text'></input>
            </OptionPanel>
            <MiddleHr />
            <OptionPanel>
              <h3>Enter the confirmation number on your receipt to leave a review.</h3>
              <input type='text'></input>
            </OptionPanel>
          </ReviewContainer>
        </Modal>
      </ListingsContainer>
    );
  }
};

export default ReviewListings;