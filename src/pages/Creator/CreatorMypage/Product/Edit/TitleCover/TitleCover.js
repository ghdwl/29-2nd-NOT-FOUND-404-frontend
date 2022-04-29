import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import styled from 'styled-components';
import ImgUploadBox from './ImgUploadBox';
import ThumbnailUpload from './ThumbnailUpload';
import Bottom from '../Bottom';
import theme from '../../../../../../styles/theme';

function TitleCover() {
  const imgArry = [1, 2, 3];
  const [thumbnail, setThumbnail] = useState('');
  const [upLoadThumnail, setUpLoadThumnail] = useState('');
  const [upLoadCover, setUpLoadCover] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  useFormPersist(
    'titleCover',
    { watch, setValue },
    {
      storage: window.localStorage,
    }
  );

  const [cover, setCover] = useState({
    img1: '',
    img2: '',
    img3: '',
  });

  const saveData = e => {
    const formDataThum = new FormData();
    const formDataCover = new FormData();
    formDataThum.append('images', upLoadThumnail);
    formDataCover.append('images', upLoadCover.img1);
    formDataCover.append('images', upLoadCover.img2);
    formDataCover.append('images', upLoadCover.img3);

    fetch(
      'http://54.165.180.52:8000/creators/media/1?mediaCategory=productThumbnail',
      {
        method: 'POST',
        headers: {
          // 'Content-Type': 'mulipart/form-data',
        },
        body: formDataThum,
      }
    );

    fetch(
      'http://54.165.180.52:8000/creators/media/1?mediaCategory=productCover',
      {
        method: 'POST',
        headers: {
          // 'Content-Type': 'mulipart/form-data',
        },
        body: formDataCover,
      }
    );
  };

  return (
    <>
      <Title>클래스 제목과 이미지를 보여주세요</Title>
      <Account>
        감성적이면서도 클래스를 잘 표현하는 제목과 이미지를 등록해 주세요.
      </Account>
      <SectionA>
        <Left>
          <Text>썸네일</Text>
          <form>
            <ThumbnailUpload
              thumbnail={thumbnail}
              setThumbnail={setThumbnail}
              setUpLoadThumnail={setUpLoadThumnail}
              register={register}
              errors={errors}
            />
          </form>
        </Left>
        <div>
          <Tip>
            <Text bold>어떤 사진이 좋을지 고민이신가요?</Text>
            <Text>
              이미지는 세로형이 아닌 가로형을 권장합니다. 클래스 커버는
              수강생분들에게 <br />
              제일 먼저 노출되는 이미지입니다. 클래스의 장점이 돋보일 수 있도록
              선정해주세요!
            </Text>
          </Tip>
        </div>
      </SectionA>
      <SectionB>
        <Text>커버 이미지</Text>
        <form>
          <ImgBoxWrap>
            {imgArry.map((idx, item) => {
              return (
                <ImgUploadBox
                  key={item}
                  cover={cover}
                  setCover={setCover}
                  index={idx}
                  upLoadCover={upLoadCover}
                  setUpLoadCover={setUpLoadCover}
                  register={register}
                />
              );
            })}
          </ImgBoxWrap>
        </form>
      </SectionB>
      <Bottom saveData={saveData} handleSubmit={handleSubmit} />
    </>
  );
}

export default TitleCover;

const Left = styled.section`
  margin-right: 40px;
`;

const Title = styled.h3`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: -1px;
`;

const Account = styled.p`
  margin-bottom: 32px;
  color: ${theme.gray};
  font-size: 14px;
  letter-spacing: -0.5px;
  line-height: 20px;
`;

const Text = styled.p`
  margin-bottom: ${props => (props.bold ? '12px' : '4px')};
  font-size: 14px;
  font-weight: ${props => (props.bold ? 700 : 400)};
  letter-spacing: -0.5px;
  line-height: 20px;
`;

const SectionA = styled.section`
  display: flex;
`;

const Tip = styled.div`
  margin-top: 24px;
  padding: 20px;
  width: 600px;
  height: 114px;
  background-color: ${theme.lightgray};
  border-radius: 3px;
`;

const SectionB = styled.section`
  margin-top: 40px;
`;

const ImgBoxWrap = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr); ;
`;
