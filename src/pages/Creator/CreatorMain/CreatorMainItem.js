import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

function CreatorMainItem({ data }) {
  return (
    <Wrapper>
      <ImgBox>
        <ItemImg src={data.image} />
      </ImgBox>
      <TextBox>
        <TextWrapper>
          <Title>{data.title}</Title>
          <Text>{data.contents}</Text>
        </TextWrapper>
      </TextBox>
    </Wrapper>
  );
}

export default CreatorMainItem;

const Wrapper = styled.section`
  ${theme.flexCustom()}
  margin-bottom: 40px;
`;

const ImgBox = styled.div`
  width: 632px;
  height: 236px;
  background-color: ${theme.lightgray};
`;

const TextBox = styled.div`
  ${theme.flexCustom('', 'none', '')}
  width: 672px;
  height: 236px;
  background-color: ${theme.lightgray};
`;

const TextWrapper = styled.div`
  margin-left: 40px;
`;

const ItemImg = styled.img`
  width: 632px;
  height: 236px;
  object-fit: cover;
`;

const Title = styled.h5`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
  white-space: pre-line;
`;

const Text = styled.p`
  color: ${theme.darkgray};
  line-height: 20px;
  white-space: pre-line;
`;
