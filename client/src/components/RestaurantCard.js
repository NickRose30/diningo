import React from 'react';
import { withRouter } from 'react-router-dom';
import Stars from './Stars';
// styles
import styled from 'styled-components';
import { colorHoverGray, colorBorderGray } from '../vars';

const Container = styled.div`
  display: flex;
  margin: 20px;

  :hover {
    cursor: pointer;
    background-color: ${colorHoverGray};
  }
`;

const DisplayImage = styled.img`
  height: 150px;
  width: 200px;
  /* change fill to cover if the pictures come out distorted */
  object-fit: fill;
`;

const DescriptionContainer = styled.div`
  flex: 1;
  padding: 15px;
  border: 1px solid ${colorBorderGray};
  border-left: none;
`;

const RestaurantHeader = styled.div`
  margin: 0;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

const RestaurantTitle = styled.h3`
  margin: 0;
`;

const RestaurantAddress = styled.div`
  margin: 0;
`;

const Description = styled.p`
  margin: 0;
  padding-top: 10px;
`;

const RestaurantCard = ({
  id,
  image,
  title,
  address,
  description,
  stars,
  history,
}) => (
  <Container onClick={() => history.push(`/${id}`)}>
    <DisplayImage
      src={image}
      alt={title}
    />
    <DescriptionContainer>
      <RestaurantHeader>
        <RestaurantTitle>{title}</RestaurantTitle>
        <Stars num={stars} />
      </RestaurantHeader>
      <RestaurantAddress>{address}</RestaurantAddress>
      <Description>{description}</Description>
    </DescriptionContainer>
  </Container>
);

export default withRouter(RestaurantCard);