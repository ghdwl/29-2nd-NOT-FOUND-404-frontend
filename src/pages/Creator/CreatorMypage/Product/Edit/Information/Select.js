import React from 'react';
import styled from 'styled-components';
import theme from '../../../../../../styles/theme';

const Select = ({ data, brand, valueCheckHandler }) => {
  let ph = '';
  if (brand === '브랜드') {
    ph += '브랜드를 선택해주세요';
  } else if (brand === '카테고리') {
    ph += '카테고리 선택해주세요';
  } else if (brand === '난이도') {
    ph += '난이도를 선택해주세요';
  } else if (brand === '클래스 분량') {
    ph += '시간을 선택해주세요';
  } else if (brand === '자막 포함 여부') {
    ph += '자막 포함 여부를 선택해주세요';
  }

  return (
    <div>
      <Text>{brand}</Text>
      <StyledSelect required onChange={valueCheckHandler} name={brand}>
        <option hidden value="">
          {ph}
        </option>
        {data?.map((data, i) => {
          return (
            <option key={i} value={data}>
              {data}
            </option>
          );
        })}
      </StyledSelect>
    </div>
  );
};

const StyledSelect = styled.select`
  margin-bottom: 32px;
  padding: 0px 48px 0px 16px;
  width: 936px;
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

  &:invalid {
    color: ${theme.silvergray};
  }
`;

const Text = styled.p`
  margin-bottom: 4px;
  font-size: 14px;
  letter-spacing: -0.5px;
  line-height: 20px;
`;

export default Select;
