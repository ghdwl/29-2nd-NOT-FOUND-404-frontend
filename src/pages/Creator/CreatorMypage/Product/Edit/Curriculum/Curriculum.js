import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import styled from 'styled-components';
import Bottom from '../Bottom';
import theme from '../../../../../../styles/theme';

function Curriculum() {
  const curriculum = ['1', '2', '3', '4'];
  const [values, setValues] = useState({});
  const [btnControl, setBtnControl] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  useFormPersist(
    'curriculum',
    { watch, setValue },
    {
      storage: window.localStorage,
    }
  );

  const saveData = e => {
    const formData = new FormData();
    formData.append('title', values);

    fetch('http://54.165.180.52:8000/creators/curriculum/1', {
      method: 'POST',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.laUV7-k5LNNxAxUajCXyjawCw9K2OinyQZMDzXKButY',
        'Content-Type': 'mulipart/form-data',
      },
      body: formData,
    });
  };

  useEffect(() => {
    const obj = JSON.parse(localStorage.getItem('curriculum'));
    if (Object.values(obj).includes('')) {
      setBtnControl(false);
    } else {
      setBtnControl(true);
    }
  });

  return (
    <section>
      <Title>클래스 커리큘럼을 작성해주세요</Title>
      <Account>
        클래스메이트들의 니즈를 정확하게 파악할 수 있는 4개의 구체적인 주제를
        선정해주세요.
      </Account>
      <form>
        {curriculum.map((item, idx) => {
          return (
            <>
              <div key={item}>
                <Text>커리큘럼{item}</Text>
                <Input
                  placeholder="작성해주세요."
                  type="text"
                  {...register(`curriculum${item}`, { required: true })}
                  style={{
                    border: errors[`curriculum${item}`]
                      ? '1px solid #ff5252'
                      : '',
                  }}
                />
              </div>
              <ErrorMsg>
                {errors[`curriculum${item}`]?.type === 'required' && (
                  <>
                    <ErrorIcon className="fa-solid fa-triangle-exclamation" />
                    <span>필수입력 입니다.</span>
                  </>
                )}
              </ErrorMsg>
            </>
          );
        })}
      </form>
      <Bottom
        saveData={saveData}
        handleSubmit={handleSubmit}
        btnControl={btnControl}
      />
    </section>
  );
}

export default Curriculum;

const Title = styled.h3`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: -1px;
`;

const Account = styled.p`
  margin-bottom: 32px;
  font-size: 14px;
  letter-spacing: -0.5px;
  line-height: 20px;
  color: ${theme.gray};
`;

const Text = styled.p`
  margin-bottom: 4px;
  font-size: 14px;
  letter-spacing: -0.5px;
  line-height: 20px;
  font-weight: ${props => (props.bold ? 700 : 400)};
`;

const Input = styled.input`
  padding: 0px 48px 0px 16px;
  width: 936px;
  height: 48px;
  border: 1px solid #efefef;
  border-radius: 3px;

  &:hover {
    border: 1px solid #d7d7d7;
  }

  &:focus {
    border: 1px solid black;
  }

  &::placeholder {
    color: ${theme.silvergray};
  }
`;

const ErrorMsg = styled.p`
  margin-top: 10px;
  margin-bottom: 26px;
  color: #ff5252;
  font-size: 11px;
  letter-spacing: -0.5px;
`;

const ErrorIcon = styled.i`
  margin-right: 4px;
`;
