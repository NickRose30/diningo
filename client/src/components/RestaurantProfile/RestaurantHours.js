import React from 'react';
import styled from 'styled-components';
import {
  colorDefaultOrange,
  colorDefaultDarkOrange,
  colorBlack,
  colorTransparentOrange
} from '../../vars';

const HoursContainer = styled.div`
  max-width: 100%;
  margin: 25px 0;
  padding: 10px;
  font-weight: bold;
  border: 1px solid ${colorDefaultOrange};
  color: ${colorBlack};
`;

const HoursSection = styled.div`
  display: flex;
  justify-content: space-around;
`;

const HoursHr = styled.hr`
  border-color: ${colorTransparentOrange};
`;

const Hours = styled.p`
  color: ${colorDefaultDarkOrange};
  margin: 5px 0;
`;

const Days = styled.p`
  margin: 5px 0;
`;

const HourDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const RestaurantHours = ({ mon, tue, wed, thu, fri, sat, sun }) => (
  <HoursContainer>
    <div>Hours</div>
    <HoursHr />
    <HoursSection>
      <HourDetails>
        <Days>Monday:</Days>
        <Days>Tuesday:</Days>
        <Days>Wednesday:</Days>
        <Days>Thursday:</Days>
        <Days>Friday:</Days>
        <Days>Saturday:</Days>
        <Days>Sunday:</Days>
      </HourDetails>
      <HourDetails>
        <Hours>{mon}</Hours>
        <Hours>{tue}</Hours>
        <Hours>{wed}</Hours>
        <Hours>{thu}</Hours>
        <Hours>{fri}</Hours>
        <Hours>{sat}</Hours>
        <Hours>{sun}</Hours>
      </HourDetails>
    </HoursSection>
  </HoursContainer>
);

export default RestaurantHours;