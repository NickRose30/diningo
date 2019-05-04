import React from 'react';
import styled from 'styled-components';
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io';
import { colorDefaultOrange } from '../../vars';

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
  for (let i = 0; i < roundedStars; i++) {
    starList.push(<FullStar key={i} />);
  }
  if (stars > roundedStars) starList.push(<HalfStar key={starList.length} />);
  while (starList.length < 5) {
    starList.push(<EmptyStar key={starList.length} />)
  }
  return starList;
};

const Stars = ({ num }) => (
  <div>{calculateStars(num)}</div>
);

export default Stars;