import React from 'react';
import styled from 'styled-components';
import theme from '../../../../../../styles/theme';
import addImg from '../../../../img/add-photo-portrait.png';
import Delete from '../../../../img/delete-2.svg';

function ThumbnailUpload({
  thumbnail,
  setThumbnail,
  setUpLoadThumnail,
  register,
  errors,
}) {
  const saveFileImage = e => {
    setThumbnail(URL.createObjectURL(e.target.files[0]));
    setUpLoadThumnail(e.target.files[0]);
  };

  const deleteFileImage = () => {
    URL.revokeObjectURL(thumbnail);
    setThumbnail('');
  };

  return (
    <>
      <ImgBox>
        {thumbnail ? (
          <>
            <Img
              src={thumbnail}
              {...register('thumnail', { required: true })}
            />
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
      <ErrorMsg>
        {errors.thumnail?.type === 'required' && (
          <>
            <ErrorIcon className="fa-solid fa-triangle-exclamation" />
            <span>필수입력 입니다.</span>
          </>
        )}
      </ErrorMsg>
    </>
  );
}

export default ThumbnailUpload;

const ImgBox = styled.div`
  ${theme.flexCustom('', '', 'column')}
  position: relative;
  width: 294px;
  height: 220px;
  color: ${theme.silvergray};
  border: 1px solid ${theme.palegray};
  border-radius: 3px;
  font-size: 14px;
  letter-spacing: -0.5px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 294px;
  height: 220px;
  border-radius: 3px;
  object-fit: cover;
`;

const Label = styled.label`
  ${theme.flexCustom('', '', 'column')}
  cursor: pointer;
`;

const AddImg = styled.img`
  margin-bottom: 10px;
  width: 72px;
  height: 72px;
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

const Icon = styled.img`
  width: 16px;
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
