import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../../../styles/theme';
import CREATOR_EDIT_SIDEBAR_LIST from './EditSideBar/EditSideBarData';

function Bottom({ isFirst, isLast, saveData, handleSubmit, btnControl }) {
  const [prev, setPrev] = useState();
  const [next, setNext] = useState();
  const [openBtn, setOpenBtn] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const saveBtnClick = () => {
    if (btnControl) {
      saveData();
      handleSubmit();
      alert('저장이 완료되었습니다!');
      setOpenBtn(true);
    }
  };

  useEffect(() => {
    CREATOR_EDIT_SIDEBAR_LIST.map((com, idx) => {
      if (com.link === params.menu) {
        setPrev(CREATOR_EDIT_SIDEBAR_LIST[idx - 1]);
      }

      if (com.link === params.menu) {
        setNext(CREATOR_EDIT_SIDEBAR_LIST[idx + 1]);
      }
    });
  }, [params]);

  const prevMenu = () => {
    navigate(`/creator/mypage/edit/${prev.link}`);
  };

  const nextMenu = () => {
    navigate(`/creator/mypage/edit/${next.link}`);
  };

  const classOpen = () => {
    if (openBtn) {
      alert('클래스가 오픈되었습니다!');
      navigate('/');
    }
  };

  return (
    <BottomWarp>
      {!isFirst && <PrevBtn onClick={prevMenu}>이전</PrevBtn>}
      <SaveBtn btnControl={btnControl} onClick={saveBtnClick}>
        저장하기
      </SaveBtn>
      {isLast ? (
        <OpenBtn openBtn={openBtn} onClick={classOpen}>
          오픈하기
        </OpenBtn>
      ) : (
        <NextBtn onClick={nextMenu}>다음</NextBtn>
      )}
    </BottomWarp>
  );
}

export default Bottom;

const BottomWarp = styled.section`
  position: absolute;
  position: fixed;
  ${theme.flexCustom('', 'flex-end', '')}
  padding: 18px 32px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 76px;
  background-color: #fff;
  border-top: 1px solid ${theme.lightgray};
`;

const SaveBtn = styled.button`
  width: 80px;
  height: 40px;
  font-size: 14px;
  font-weight: 500;
  background-color: ${theme.lightgray};
  text-align: center;
  letter-spacing: -0.5px;
  border-radius: 4px;
  color: ${props => (props.btnControl ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0.05)')};
  cursor: ${props => (props.btnControl ? 'pointer' : 'no-drop')};

  &:hover {
    background-color: ${props => props.btnControl && '#dfdfdf'};
  }
`;

const PrevBtn = styled.button`
  position: absolute;
  left: 300px;
  margin: 0px 8px;
  width: 55px;
  height: 40px;
  border-radius: 4px;
  background-color: ${theme.lightgray};
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.5px;

  &:hover {
    background-color: #dfdfdf;
  }
`;

const NextBtn = styled.button`
  margin: 0px 8px;
  width: 55px;
  height: 40px;
  color: #fff;
  border-radius: 4px;
  background-color: ${theme.orange};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.5px;
  text-align: center;

  &:hover {
    background-color: #cc4500;
  }
`;

const OpenBtn = styled.button`
  margin: 0px 8px;
  width: 76px;
  height: 40px;
  color: #fff;
  border-radius: 4px;
  background-color: ${props =>
    props.openBtn ? `${theme.orange}` : 'rgba(255,86,0,0.1)'};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.5px;
  text-align: center;
  cursor: ${props => (props.openBtn ? 'pointer' : 'no-drop')};

  &:hover {
    background-color: ${props => props.openBtn && '#cc4500'};
  }
`;
