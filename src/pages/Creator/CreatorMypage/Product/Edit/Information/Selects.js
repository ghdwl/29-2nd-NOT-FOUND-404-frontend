import React, { useEffect, useState } from 'react';
import Select from './Select';
import styled from 'styled-components';
import { CLASS_TIME } from './CLASS_TIME';
import { INFO_CLASSTYPE_DATA } from './INFO_CLASSTYPE_DATA';
import { LEVEL_DATA } from './LEVEL_DATA';
import { SUB_EXIST } from './SUB_EXIST';
import { CHOOSE_CATEG } from './CHOOSE_CATEG';
import theme from '../../../../../../styles/theme';

const Selects = ({ valueCheck, errors, register }) => {
  const [showCate, setShowCate] = useState('');
  const [checking, setChecking] = useState('');
  const [postData, setPostData] = useState('');

  const valueCheckHandler = event => {
    const { name, value } = event.target;

    setChecking({ ...checking, [name]: value ? true : false });
    setPostData({ ...postData, [name]: value });
    if (name === '브랜드') setShowCate(value);
  };

  useEffect(() => {
    const checkLen = Object.keys(checking).length === 7;
    const checkBoolean = Object.values(checking).every(
      (val, i, arr) => val === arr[0]
    );

    checkLen && checkBoolean
      ? valueCheck(true, postData)
      : valueCheck(false, postData);
  }, [checking]);

  return (
    <>
      <Select
        data={INFO_CLASSTYPE_DATA}
        brand="브랜드"
        valueCheckHandler={valueCheckHandler}
        {...register('brand')}
      />

      <Select
        data={CHOOSE_CATEG[showCate]}
        valueCheckHandler={valueCheckHandler}
        brand="카테고리"
        {...register('category')}
      />

      <Text brand="클래스 제목">클래스 제목</Text>
      <InputWrap>
        <Input
          type="text"
          placeholder="제목을 입력해주세요."
          name="클래스 제목"
          {...register('classTitle', { required: true })}
          style={{ border: errors.classTitle ? '1px solid #ff5252' : '' }}
        />
        <ErrorMsg>
          {errors.classTitle?.type === 'required' && (
            <>
              <ErrorIcon className="fa-solid fa-triangle-exclamation" />
              <span>필수입력 입니다.</span>
            </>
          )}
        </ErrorMsg>
      </InputWrap>

      <Text brand="가격">가격</Text>
      <InputWrap>
        <Input
          type="number"
          placeholder="가격을 입력해주세요."
          name="가격"
          {...register('price', { required: true })}
          style={{ border: errors.price ? '1px solid #ff5252' : '' }}
        />
        <ErrorMsg>
          {errors.price?.type === 'required' && (
            <>
              <ErrorIcon className="fa-solid fa-triangle-exclamation" />
              <span>필수입력 입니다.</span>
            </>
          )}
        </ErrorMsg>
      </InputWrap>

      {Datas2.map(data => (
        <Select
          key={data.id}
          data={data.data}
          brand={data.text}
          valueCheckHandler={valueCheckHandler}
        />
      ))}
    </>
  );
};

export default Selects;

const Datas2 = [
  { data: LEVEL_DATA, text: '난이도' },
  { data: CLASS_TIME, text: '클래스 분량' },
  { data: SUB_EXIST, text: '자막 포함 여부' },
];

const Input = styled.input`
  padding: 0px 48px 0px 16px;
  width: 936px;
  height: 48px;
  border: 1px solid #efefef;
  border-radius: 3px;

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:hover {
    border: 1px solid ${theme.softgray};
  }

  &:focus {
    border: 1px solid black;
  }

  &::placeholder {
    color: ${theme.silvergray};
  }
`;

const InputWrap = styled.div`
  margin-bottom: 32px;
`;

const Text = styled.p`
  margin-bottom: 4px;
  font-size: 14px;
  letter-spacing: -0.5px;
  line-height: 20px;
`;

const ErrorMsg = styled.p`
  margin-top: 10px;
  color: #ff5252;
  font-size: 11px;
  letter-spacing: -0.5px;
`;

const ErrorIcon = styled.i`
  margin-right: 4px;
`;
