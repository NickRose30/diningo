import React from 'react';
import styled from 'styled-components';
import { colorDefaultOrange, colorWhite, colorTransparentWhite } from '../../vars';

const CompContainer = styled.div`
  margin-top: auto;
`;

const FooterContainer = styled.footer`
  background-color: ${colorDefaultOrange};
  height: 50px;
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const Copyright = styled.div`
  color: ${colorWhite};
  width: 100%;
  text-align: center;
`;

const CopyrightLabel = styled.div`
  color: ${colorTransparentWhite};
  display: inline-block;
`;

const Footer = props => (
  <CompContainer ref={props.setRef}>
    <FooterContainer>
      <Copyright>
        <CopyrightLabel>© 2019 Copyright:</CopyrightLabel> Diningoinc.com
      </Copyright>
    </FooterContainer>
  </CompContainer>
);

export default Footer;