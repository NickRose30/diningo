import React, { Component } from 'react';
import styled from 'styled-components';
import { colorTransparentBlack } from '../vars';
import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io';

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

const NextButton = styled.div`
  color: white;
  font-size: xx-large;
  padding: 10px 0 5px 0;
  float: right;
  margin-top: -50%;
  background: ${colorTransparentBlack};

  :hover {
    cursor: pointer;
  }
`;

const PrevButton = styled.div`
  color: white;
  font-size: xx-large;
  padding: 10px 0 5px 0;
  float: left;
  margin-top: -50%;
  background: ${colorTransparentBlack};

  :hover {
    cursor: pointer;
  }
`;

class ProfileImages extends Component {
  state = {
    mainImageIndex: 0,
  }

  handleImgClick = i => () => this.setState({ mainImageIndex: i });

  handleNextClick = numImages => () => this.setState(prevState => ({
    mainImageIndex: 
      prevState.mainImageIndex < numImages - 1 ? prevState.mainImageIndex + 1 : 0
  })); 

  handlePrevClick = numImages => () => this.setState(prevState => ({
    mainImageIndex: 
      prevState.mainImageIndex > 0 ? prevState.mainImageIndex - 1 : numImages - 1
  }));

  render() {
    const { images } = this.props;
    const numImgs = images.length;

    const defaultImg = this.props.images[this.state.mainImageIndex];

    const smallImages = this.props.images.map((src, i) => (
      <SmallImage src={src} onClick={this.handleImgClick(i)} key={i} />
    ));

    return (
      <SectionContainer>
        <div>
          <LargeImage src={defaultImg} />
          <NextButton onClick={this.handleNextClick(numImgs)}>
            <IoMdArrowDropright />
          </NextButton>
          <PrevButton onClick={this.handlePrevClick(numImgs)}>
            <IoMdArrowDropleft />
          </PrevButton>
        </div>
        <SmallImagesContainer>
          {smallImages}
        </SmallImagesContainer>
      </SectionContainer>
    );
  }
}

export default ProfileImages;