import React from 'react';
import { Cate } from './Cate';
import CREATOR_SIDEBAR_LIST from './CreatorSideBarData';
import styled from 'styled-components';
import theme from '../../../../styles/theme';

function CreatorSideBar() {
  return (
    <Nav>
      <CategoryWrapper>
        {CREATOR_SIDEBAR_LIST.map(sidebar => {
          return <Cate key={sidebar.id} sidebar={sidebar} />;
        })}
      </CategoryWrapper>
    </Nav>
  );
}

export default CreatorSideBar;

const Nav = styled.nav`
  position: fixed;
  ${theme.flexCustom('', 'none', 'column')}
  margin-top: 83px;
  z-index: 20000;
  width: 239px;
  height: 100vmin;
  background-color: #fff;
  border-right: 1px solid ${theme.palegray};
`;

const CategoryWrapper = styled.div`
  ${theme.flexCustom('', 'none', 'column')}
  margin-top: 20px;
`;
