import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import CreatorSideBar from './CreatorSideBar/CreatorSideBar';
import Notice from './Notice/Notice';
import New from './Product/New';

const menu = {
  product: <New />,
  notice: <Notice />,
};

function CreatorMypage() {
  const params = useParams();

  return (
    <>
      <CreatorSideBar />
      <MyPageWrap>
        <SideBarBox />
        <Wrapper>{menu[params.menu]}</Wrapper>
      </MyPageWrap>
    </>
  );
}

export default CreatorMypage;

const SideBarBox = styled.div`
  width: 239px;
`;

const MyPageWrap = styled.section`
  ${theme.flexCustom()}
`;

const Wrapper = styled.section`
  padding: 113px 0px 32px 0px;
`;
