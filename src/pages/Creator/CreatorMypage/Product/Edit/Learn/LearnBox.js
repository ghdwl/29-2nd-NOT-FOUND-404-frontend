import React from 'react';
import styled from 'styled-components';
import theme from '../../../../../../styles/theme';
import addImg from '../../../../img/add-photo-portrait.png';
import Delete from '../../../../img/delete-2.svg';

function LearnBox({ files, setFiles, index, setUpLoadImg, register, errors }) {
  const saveFileImage = e => {
    setFiles(prev => ({
      ...prev,
      [e.target.name]: URL.createObjectURL(e.target.files[0]),
    }));
    setUpLoadImg(prev => ({
      ...prev,
      [e.target.name]: e.target.files[0],
    }));
  };

  const deleteFileImage = () => {
    URL.revokeObjectURL(files[`img${index}`]);
    setFiles(prev => ({
      ...prev,
      [`img${index}`]: '',
    }));
  };

  return (
    <BoxWarp>
      <ImgBox>
        {files[`img${index}`] ? (
          <>
            <Img src={files[`img${index}`]} {...register(`img${index}`)} />
            <DeleteBtn onClick={deleteFileImage}>
              <Icon src={Delete} />
            </DeleteBtn>
          </>
        ) : (
          <div>
            <Label>
              <AddImg src={addImg} />
              이미지를 첨부해주세요
              <input
                name={`img${index}`}
                type="file"
                accept="image/*"
                id="check"
                style={{ display: 'none' }}
                onChange={saveFileImage}
              />
            </Label>
          </div>
        )}
      </ImgBox>
      <TextBox
        type="text"
        placeholder="제목을 적어주세요."
        id={`title${index - 1}`}
        {...register(`title${index}`, { required: true })}
      />

      <AccountBox
        type="text"
        placeholder="사진에 대한 설명을 적어주세요."
        id={`account${index}`}
        {...register(`info${index}`, { required: true })}
      />
      <ErrorMsg>
        {errors[`title${index}`]?.type === 'required' ? (
          <>
            <ErrorIcon className="fa-solid fa-triangle-exclamation" />
            <span>사진, 제목, 설명 모두 채워주세요.</span>
          </>
        ) : (
          errors[`info${index}`]?.type === 'required' && (
            <>
              <ErrorIcon className="fa-solid fa-triangle-exclamation" />
              <span>사진, 제목, 설명 모두 채워주세요.</span>
            </>
          )
        )}
      </ErrorMsg>
    </BoxWarp>
  );
}

export default LearnBox;

const BoxWarp = styled.section`
  ${theme.flexCustom('none', 'none', 'column')}
  padding: 0px 26px 26px 0px;
`;

const ImgBox = styled.div`
  position: relative;
  ${theme.flexCustom('', '', 'column')}
  width: 294px;
  height: 165.38px;
  color: ${theme.silvergray};
  border: 1px solid ${theme.palegray};
  border-radius: 3px;
  font-size: 14px;
  letter-spacing: -0.5px;
`;

const Img = styled.img`
  width: 294px;
  height: 165.38px;
  border-radius: 3px;
  object-fit: cover;
`;

const Label = styled.label`
  ${theme.flexCustom('', '', 'column')}
  cursor: pointer;
`;

const Icon = styled.img`
  width: 16px;
`;

const DeleteBtn = styled.button`
  ${theme.flexCustom()}
  position: absolute;
  top: 10px;
  right: 10px;
  width: 28px;
  height: 28px;
  border-radius: 100%;
  background-color: #fff;

  &:hover {
    background-color: #e6e6e6;
  }
`;

const TextBox = styled.input`
  padding: 0px 16px;
  margin-top: 8px;
  width: 294px;
  height: 40px;
  border: 1px solid ${theme.palegray};
  border-radius: 3px;

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

const AccountBox = styled.textarea`
  padding: 12px 16px;
  margin-top: 8px;
  width: 294px;
  height: 104px;
  border: 1px solid ${theme.palegray};
  border-radius: 3px;
  letter-spacing: -0.5px;
  font-family: 'Noto Sans KR';

  &::placeholder {
    color: ${theme.silvergray};
  }

  &:hover {
    border: 1px solid ${theme.softgray};
  }

  &:focus {
    outline: none;
    border: 1px solid black;
  }
`;

const AddImg = styled.img`
  margin-bottom: 10px;
  width: 72px;
  height: 72px;
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
