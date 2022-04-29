import React from 'react';
import styled from 'styled-components';
import theme from '../../../../../../styles/theme';
import Camera from '../../../../img/camera.svg';
import defaultImg from '../../../../img/default_profile.png';

function ProfileUploadBox({ files, setFiles, setUpLoadImg, register }) {
  const saveFileImage = e => {
    setFiles(URL.createObjectURL(e.target.files[0]));
    setUpLoadImg(e.target.files[0]);
  };

  return (
    <ImgBox for="file" {...register('profileImg')}>
      {files && <FileImg src={files} />}
      <AddBtn for="file">
        <Icon src={Camera} />
      </AddBtn>
      <Default src={defaultImg} />
      <input
        type="file"
        accept="image/*"
        id="file"
        onChange={saveFileImage}
        style={{ display: 'none' }}
      />
    </ImgBox>
  );
}

export default ProfileUploadBox;

const ImgBox = styled.label`
  ${theme.flexCustom('', '', 'column')}
  position: relative;
  width: 86px;
  height: 86px;
  border-radius: 100%;
  background-color: #efefef;
  cursor: pointer;
`;

const FileImg = styled.img`
  position: absolute;
  width: 86px;
  height: 86px;
  border-radius: 100%;
  object-fit: cover;
`;

const AddBtn = styled.label`
  position: absolute;
  ${theme.flexCustom()}
  right: 0px;
  bottom: 0px;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-color: black;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 15px;
`;

const Default = styled.img`
  width: 86px;
  height: 86px;
  border-radius: 100%;
`;
