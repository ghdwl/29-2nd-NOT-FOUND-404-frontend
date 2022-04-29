import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

function CreatorMainRecord({ data }) {
  return (
    <Box>
      <TextWrapper>
        <Text>{data.text}</Text>
        <Title>{data.sum}</Title>
      </TextWrapper>
    </Box>
  );
}

export default CreatorMainRecord;

const Box = styled.div`
  ${theme.flexCustom()}
  margin-right: 68px;
  height: 64px;
  border-left: 1px solid rgb(255, 255, 255, 0.4);
`;

const TextWrapper = styled.div`
  margin-left: 16px;
`;

const Title = styled.h3`
  font-size: 28px;
  font-weight: 700;
  color: #fff;
`;

const Text = styled.p`
  margin-bottom: 8px;
  color: #fff2e9;
  font-size: 14px;
`;
