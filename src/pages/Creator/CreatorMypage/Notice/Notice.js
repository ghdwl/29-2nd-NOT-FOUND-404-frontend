import React, { useState } from 'react';
import styled from 'styled-components';
import NoticeBox from './NoticeBox';
import NoticeHeader from './NoticeHeader';
import NoticeNew from './NoticeNew';

function Notice() {
  const [notice, setNotice] = useState(false);

  return (
    <Warp>
      <NoticeHeader />
      {notice ? (
        <NoticeNew setNotice={setNotice} />
      ) : (
        <NoticeBox setNotice={setNotice} />
      )}
    </Warp>
  );
}

export default Notice;

const Warp = styled.section`
  padding-top: 40px;
  width: 545px;
`;
