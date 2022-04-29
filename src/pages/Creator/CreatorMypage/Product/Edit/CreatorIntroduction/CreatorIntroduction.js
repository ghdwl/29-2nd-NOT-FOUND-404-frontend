import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import styled from 'styled-components';
import ProfileUploadBox from './ProfileUploadBox';
import Bottom from '../Bottom';
import theme from '../../../../../../styles/theme';

function CreatorIntroduction() {
  const [files, setFiles] = useState('');
  const [upLoadImg, setUpLoadImg] = useState('');
  const [values, setValues] = useState('');
  const [btnControl, setBtnControl] = useState(false);
  const [inputs, setInputs] = useState({
    name: '',
    description: '',
  });
  const { name, description } = inputs;
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  useFormPersist(
    'creatorIntroduction',
    { watch, setValue },
    {
      storage: window.localStorage,
    }
  );

  const saveData = () => {
    const formData = new FormData();
    formData.append('images', upLoadImg);

    formData.append(
      'data',
      JSON.stringify({ name: name, description: description })
    );

    fetch('http://54.165.180.52:8000/creators/register', {
      method: 'POST',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.laUV7-k5LNNxAxUajCXyjawCw9K2OinyQZMDzXKButY',
      },
      body: formData,
    }).then(res => res.json);
  };

  useEffect(() => {
    const obj = JSON.parse(localStorage.getItem('creatorIntroduction'));
    if (obj.name && obj.description) {
      setBtnControl(true);
    } else {
      setBtnControl(false);
    }
  });

  return (
    <section>
      <Title>본인을 소개해 주세요</Title>
      <ProfileWrap>
        <Text>프로필</Text>
        <ProfileUploadBox
          files={files}
          setFiles={setFiles}
          setUpLoadImg={setUpLoadImg}
          register={register}
          useFormPersis={useFormPersist}
        />
      </ProfileWrap>
      <form>
        <Text>크리에이터 닉네임</Text>
        <Input
          name="name"
          placeholder="사용할 닉네임을 적어주세요"
          {...register('name', { required: true })}
          style={{ border: errors.name ? '1px solid #ff5252' : '' }}
        />
        <ErrorMsg>
          {errors.name?.type === 'required' && (
            <>
              <ErrorIcon className="fa-solid fa-triangle-exclamation" />
              <span>필수입력 입니다.</span>
            </>
          )}
        </ErrorMsg>

        <Text top>크리에이터 소개</Text>
        <TextArea
          name="description"
          placeholder="크리에이터님이 어떤 분인지 소개해 주세요."
          {...register('description', { required: true })}
          style={{ border: errors.description ? '1px solid #ff5252' : '' }}
        />
        <ErrorMsg>
          {errors.description?.type === 'required' && (
            <>
              <ErrorIcon className="fa-solid fa-triangle-exclamation" />
              <span>필수입력 입니다.</span>
            </>
          )}
        </ErrorMsg>
      </form>
      <Bottom
        isLast={true}
        saveData={saveData}
        handleSubmit={handleSubmit}
        btnControl={btnControl}
      />
    </section>
  );
}

export default CreatorIntroduction;

const ProfileWrap = styled.section`
  margin-bottom: 32px;
`;

const Title = styled.h3`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: -1px;
`;

const Text = styled.p`
  margin-top: ${props => (props.top ? '32px' : '0px')};
  margin-bottom: 4px;
  font-size: 14px;
  letter-spacing: -0.5px;
  line-height: 20px;
`;

const Input = styled.input`
  padding: 0px 16px;
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

const TextArea = styled.textarea`
  padding: 12px 16px;
  width: 936px;
  height: 104px;
  border: 1px solid #efefef;
  border-radius: 3px;
  font-family: 'Noto Sans KR';
  letter-spacing: -0.5px;

  &::placeholder {
    color: ${theme.silvergray};
  }

  &:focus {
    outline: none;
    border: 1px solid black;
  }
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
