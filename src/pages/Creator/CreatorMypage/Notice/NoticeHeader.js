import React from 'react';
import styled from 'styled-components';
import theme from '../../../../styles/theme';

function NoticeHeader() {
  return (
    <div>
      <Header>
        <Title>클래스 소식</Title>
        <Select>
          <option>클래스를 선택해주세요</option>
        </Select>
      </Header>
    </div>
  );
}

export default NoticeHeader;

const Header = styled.div`
  ${theme.flexCustom('center', 'space-between', '')}
  margin-bottom: 16px;
`;

const Title = styled.h3`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -1px;
`;

const Select = styled.select`
  padding: 0px 48px 0px 16px;
  width: 360px;
  height: 48px;
  border: 1px solid #efefef;
  border-radius: 3px;
  -webkit-appearance: none;

  &:hover {
    border: 1px solid ${theme.softgray};
  }

  &:focus {
    outline: none;
    border: 1px solid black;
  }
`;
