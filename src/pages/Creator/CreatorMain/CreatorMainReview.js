import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

function CreatorMainReview({ data }) {
  return (
    <div>
      {data && (
        <>
          <ReviewImg src={data.image} />
          <Title>{data.title}</Title>
          <Text>{data.contents}</Text>
        </>
      )}
    </div>
  );
}

export default CreatorMainReview;

const ReviewImg = styled.img`
  margin-bottom: 16px;
  width: 628px;
  height: 418px;
  border-radius: 4px;
  object-fit: cover;
`;

const Title = styled.h6`
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.5px;
  white-space: pre-line;
`;

const Text = styled.p`
  line-height: 22px;
  color: ${theme.darkgray};
  letter-spacing: -0.5px;
  white-space: pre-line;
`;
