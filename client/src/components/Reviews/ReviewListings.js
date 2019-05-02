import React from 'react';
import styled from 'styled-components';
import ReviewCard from './ReviewCard';
import { DefaultBtn } from '../../sharedAssets';

const ListingsContainer = styled.div`
  width: 100%;
`;

const Header = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`;

const ReviewListings = ({ reviews }) => {
  const reviewCards = reviews ? reviews.map((review, i) => (
    <ReviewCard {...review} key={i} />
  )) : [];

  return (
    <ListingsContainer>
      <Header>
        <h3>Reviews</h3>
        <DefaultBtn to='#'>Leave a review</DefaultBtn>
      </Header>
      {reviewCards}
    </ListingsContainer>
  );
};

export default ReviewListings;