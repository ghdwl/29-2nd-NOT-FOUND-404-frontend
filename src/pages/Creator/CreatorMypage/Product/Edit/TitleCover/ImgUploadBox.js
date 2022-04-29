import React from 'react';
import styled from 'styled-components';
import theme from '../../../../../../styles/theme';
import addImg from '../../../../img/add-photo-portrait.png';
import Delete from '../../../../img/delete-2.svg';

function ImgUploadBox({ cover, setCover, index, setUpLoadCover, register }) {
  const saveFileImage = e => {
    setCover(prev => ({
      ...prev,
      [e.target.name]: URL.createObjectURL(e.target.files[0]),
    }));
    setUpLoadCover(prev => ({
      ...prev,
      [e.target.name]: e.target.files[0],
    }));
  };

  const deleteFileImage = () => {
    URL.revokeObjectURL(cover[`img${index}`]);
    setCover(prev => ({
      ...prev,
      [`img${index}`]: '',
    }));
  };

  return (
    <ImgBox>
      {cover[`img${index}`] ? (
        <>
          <Img src={cover[`img${index}`]} {...register(`img${index}`)} />
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
  );
}

export default ImgUploadBox;

const ImgBox = styled.div`
  ${theme.flexCustom('', '', 'column')}
  position: relative;
  margin: 0px 20px 20px 0px;
  width: 300px;
  height: 225px;
  border: 1px solid ${theme.palegray};
  border-radius: 3px;
  font-size: 14px;
  color: ${theme.silvergray};
  letter-spacing: -0.5px;
  cursor: pointer;
`;

const AddImg = styled.img`
  margin-bottom: 10px;
  width: 72px;
  height: 72px;
`;

const DeleteBtn = styled.button`
  position: absolute;
  ${theme.flexCustom()}
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

const Label = styled.label`
  ${theme.flexCustom('', '', 'column')}
  cursor: pointer;
`;

const Img = styled.img`
  width: 300px;
  height: 225px;
  border-radius: 3px;
  object-fit: cover;
`;
