import React from 'react';
import { withRouter } from 'react-router-dom';
// styles
import styled from 'styled-components';
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io';
import { colorDefaultOrange, colorHoverGray } from '../vars';

const Container = styled.div`
  display: flex;
  margin: 40px;

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
  border: 1px solid lightgray;
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

const starStyles = `
  color: ${colorDefaultOrange};
  margin: 0 5px;
  font-size: x-large;
`;

const FullStar = styled(IoMdStar)`
  ${starStyles}
`;

const HalfStar = styled(IoMdStarHalf)`
  ${starStyles}
`;

const EmptyStar = styled(IoMdStarOutline)`
  ${starStyles}
`;

const calculateStars = numStars => {
  const starList = [];
  const stars = parseFloat(numStars);
  const roundedStars = parseInt(stars);
  for(let i = 0; i < roundedStars; i++) {
    starList.push(<FullStar key={i} />);
  }
  if (stars > roundedStars) starList.push(<HalfStar key={starList.length} />);
  while(starList.length < 5) {
    starList.push(<EmptyStar key={starList.length} />)
  }
  return starList;
};

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
        <div>{calculateStars(stars)}</div>
      </RestaurantHeader>
      <RestaurantAddress>{address}</RestaurantAddress>
      <Description>{description}</Description>
    </DescriptionContainer>
  </Container>
);

export default withRouter(RestaurantCard);