import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

function CreatorMainQnA({ data }) {
  const [viewQnA, setViewQnA] = useState(false);

  const clickQnA = () => {
    setViewQnA(!viewQnA);
  };

  return (
    <>
      <Qbox onClick={clickQnA}>
        <Q>{data.Q}</Q>
        <Button
          className={viewQnA ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}
        />
      </Qbox>
      {viewQnA && <A>{data.A}</A>}
      <Line />
    </>
  );
}

export default CreatorMainQnA;

const Qbox = styled.button`
  ${theme.flexCustom('', 'space-between', '')}
  width: 1304px;
`;

const Button = styled.button`
  font-size: 16px;
  color: #a7a7a7;
`;

const Q = styled.p`
  padding: 20px 0px;
  font-weight: 700;
`;

const Line = styled.div`
  width: 1304px;
  border-bottom: 1px solid ${theme.lightgray};
`;

const A = styled.p`
  padding: 0px 0px 40px 24px;
  color: ${theme.darkgray};
  line-height: 22px;
`;
