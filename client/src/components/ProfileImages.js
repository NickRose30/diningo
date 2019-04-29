import React, { Component } from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LargeImage = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
`;

const SmallImagesContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const SmallImage = styled.div`
  width: 50px;
  height: 50px;
  margin: 5px;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;

  :hover {
    cursor: pointer;
  }
`;


class ProfileImages extends Component {
  state = {
    mainImageIndex: 0,
  }

  handleClick = i => () => this.setState({ mainImageIndex: i });

  render() {
    const defaultImg = this.props.images[this.state.mainImageIndex];

    const smallImages = this.props.images.map((src, i) => (
      <SmallImage src={src} onClick={this.handleClick(i)} key={i} />
    ));

    return (
      <SectionContainer>
        <LargeImage src={defaultImg} />
        <SmallImagesContainer>
          {smallImages}
        </SmallImagesContainer>
      </SectionContainer>
    );
  }
}

export default ProfileImages;