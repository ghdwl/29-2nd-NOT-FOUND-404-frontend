import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import styled from 'styled-components';
import MarkDown from './MarkDown';
import Bottom from '../Bottom';
import theme from '../../../../../../styles/theme';

function Class() {
  const [data, setData] = useState();
  const [getContent, setGetContent] = useState();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  useFormPersist(
    'classIntroduction',
    { watch, setValue },
    {
      storage: window.localStorage,
    }
  );

  const saveData = () => {
    fetch('http://54.165.180.52:8000/creators/creating/1', {
      method: 'PATCH',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.laUV7-k5LNNxAxUajCXyjawCw9K2OinyQZMDzXKButY',
      },
      body: JSON.stringify({
        description: getContent,
      }),
    }).then(res => res.json);
  };

  return (
    <div>
      <Title>클래스를 소개해주세요</Title>
      <Account>
        내 클래스를 표현한다면 어떤 단어가 좋을까요? 간단하지만 효과적으로
        클래스를 어필해보세요.
      </Account>
      <form>
        <MarkDown
          data={data}
          setData={setData}
          setGetContent={setGetContent}
          register={register}
        />
      </form>
      <ErrorMsg>
        {errors.name?.type === 'required' && (
          <>
            <ErrorIcon className="fa-solid fa-triangle-exclamation" />
            <span>필수입력 입니다.</span>
          </>
        )}
      </ErrorMsg>
      <Bottom saveData={saveData} handleSubmit={handleSubmit} />
    </div>
  );
}

export default Class;

const Title = styled.h3`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: -1px;
`;

const Account = styled.p`
  margin-bottom: 32px;
  font-size: 14px;
  letter-spacing: -0.5px;
  line-height: 20px;
  color: ${theme.gray};
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
