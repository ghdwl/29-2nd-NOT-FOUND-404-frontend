import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import CreatorIntroduction from './CreatorIntroduction/CreatorIntroduction';
import Curriculum from './Curriculum/Curriculum';
import EditHeader from './EditHeader/EditHeader';
import EditSideBar from './EditSideBar/EditSideBar';
import Information from './Information/Information';
import Learn from './Learn/Learn';
import TitleCover from './TitleCover/TitleCover';
import Class from './Class/Class';

const menu = {
  info: <Information />,
  'title-cover': <TitleCover />,
  learn: <Learn />,
  'class-introduction': <Class />,
  curriculum: <Curriculum />,
  'creator-introduction': <CreatorIntroduction />,
};

function Edit() {
  const params = useParams();

  return (
    <div>
      <Body>
        <Wrapper>{menu[params.menu]}</Wrapper>
        <EditSideBar />
        <EditHeader />
      </Body>
    </div>
  );
}

export default Edit;

const Body = styled.section`
  &::selection {
    background: red;
    color: #fff;
  }
`;

const Wrapper = styled.section`
  position: absolute;
  padding: 32px 0px 92px;
  top: 80px;
  left: 400px;
`;
