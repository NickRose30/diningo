import React, { Component } from 'react';
import styled from 'styled-components';
// components
import Nav from './Nav';

const Container = styled.div`
  margin: 0 30px;
  display: flex;
`;

class Workspace extends Component {
  workspaceRef = React.createRef();

  render() {
    const { Component } = this.props;
    return (
      <div>
        <Nav workspaceRef={this.workspaceRef} />
        <Container>
          <Component setRef={this.workspaceRef} />
        </Container>
      </div>
    );
  }
}

export default Workspace;
