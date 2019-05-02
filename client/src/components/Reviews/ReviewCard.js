import React from 'react';
import styled from 'styled-components';
import { IoMdContact } from 'react-icons/io';
import { colorDefaultDarkOrange, colorLightGray } from '../../vars';
import Stars from '../Stars/Stars';

const ReviewContainer = styled.div`
  display: flex;
  margin: 10px 20px;
  border-bottom: 1px solid ${colorDefaultDarkOrange};
  padding-bottom: 15px;
`;

const Info = styled.h5`
  margin: 0;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 25px;
`;

const Avatar = styled(IoMdContact)`
  font-size: 400%;
  color: ${colorLightGray};
`;

const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 17px 0;
  align-items: center;
`;

const ReviewCard = ({
  username,
  time,
  stars,
  review,
}) => (
    <ReviewContainer>
      <User>
        <Avatar />
        <Info>{username}</Info>
      </User>
      <ReviewContent>
        <Header>
          <Info>{time}</Info>
          <Stars num={stars} />
        </Header>
        <div>{review}</div>
      </ReviewContent>
    </ReviewContainer>
);

export default ReviewCard;