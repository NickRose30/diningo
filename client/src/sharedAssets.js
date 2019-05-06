import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  colorDefaultOrange,
  colorWhite,
} from './vars';

export const DefaultBtn = styled(Link)`
  text-decoration: none;
  border: 2px solid ${colorDefaultOrange};
  margin: auto 10px;
  color: ${colorDefaultOrange};
  border-radius: 5px;
  padding: 5px 20px;
  text-align: center;
  
  :hover {
    background-color: ${colorDefaultOrange};
    color: ${colorWhite}
    cursor: pointer;
  }
`;