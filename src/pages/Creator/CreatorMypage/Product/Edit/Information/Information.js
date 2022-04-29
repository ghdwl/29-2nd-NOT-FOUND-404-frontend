import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import styled from 'styled-components';
import theme from '../../../../../../styles/theme';
import Bottom from '../Bottom';
import Selects from './Selects';

function Information() {
  const [isInputValue, setIsInputValue] = useState('');
  const [btnControl, setBtnControl] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  useFormPersist(
    'information',
    { watch, setValue },
    {
      storage: window.localStorage,
    }
  );

  useEffect(() => {
    const obj = JSON.parse(localStorage.getItem('information'));
    if (obj.classTitle && obj.price) {
      setBtnControl(true);
    } else {
      setBtnControl(false);
    }
  });

  const valueCheck = (check, data) => {
    setIsInputValue([check, data]);
  };

  const saveData = () => {};

  return (
    <InformationWarp>
      <Title>어떤 클래스인지 알려주세요</Title>
      <Account>
        언젠가 이런 걸 가르쳐봐야지 생각해본 적이 있으신가요?
        <br />
        간단히 크리에이터님이 알려 줄 수 있는 카테고리를 설정해봐요.
      </Account>
      <form>
        <Selects valueCheck={valueCheck} errors={errors} register={register} />
      </form>
      <Bottom
        isFirst={true}
        saveData={saveData}
        handleSubmit={handleSubmit}
        btnControl={btnControl}
      />
    </InformationWarp>
  );
}

export default Information;

const InformationWarp = styled.section`
  ${theme.flexCustom('none', '', 'column')}
`;

const Title = styled.h3`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: -1px;
`;

const Account = styled.p`
  margin-bottom: 32px;
  color: ${theme.gray};
  font-size: 14px;
  letter-spacing: -0.5px;
  line-height: 20px;
`;
