import React, { Component } from 'react';
import styled from 'styled-components';
// components
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const CompContainer = styled.div`
  margin: 0 30px;
  display: flex;
`;

class Workspace extends Component {
  workspaceRef = React.createRef();
  footerRef = React.createRef();

  render() {
    const { Component } = this.props;
    return (
      <Container>
        <Nav workspaceRef={this.workspaceRef} />
        <CompContainer>
          <Component setRef={this.workspaceRef} footerRef={this.footerRef} />
        </CompContainer>
        <Footer setRef={this.footerRef} />
      </Container>
    );
  }
}

export default Workspace;
