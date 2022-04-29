import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Close from '../../../../img/close.svg';
import theme from '../../../../../../styles/theme';

function Modal({ open, close, setModalOpen }) {
  const navigate = useNavigate();

  const handleModal = () => {
    navigate('/creator/mypage/product');
    setModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div>
      {open ? (
        <ModalBg>
          <ModalBox>
            <CloseBtn onClick={close}>
              <img src={Close} alt="close" />
            </CloseBtn>
            <Title>
              크리에이터님
              <br />
              정말 나가실 거예요?
            </Title>
            <Text>
              오늘, 마음먹은 김에 바로 페이지 작성을 완료하고 크리에이터님을
              기다리고 있는 수강생들을 만나세요! 조금만 더 힘내봐요 우리 🙆‍♀️
            </Text>
            <BtnWarp>
              <OutBtn onClick={handleModal}>나갈래요</OutBtn>
              <KeepBtn onClick={close}>계속 작성할래요</KeepBtn>
            </BtnWarp>
          </ModalBox>
        </ModalBg>
      ) : null}
    </div>
  );
}

export default Modal;

const ModalBg = styled.div`
  ${theme.flexCustom('center', 'center', '')}
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
  animation: modal-bg-show 0.3s;

  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalBox = styled.section`
  position: relative;
  padding: 32px;
  width: 480px;
  height: 252px;
  background-color: #fff;
  border-radius: 10px;
  letter-spacing: -1px;
`;

const Title = styled.h3`
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: -1px;
`;

const Text = styled.p`
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 24px;
`;

const BtnWarp = styled.div`
  ${theme.flexCustom('', 'space-between', '')}
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 32px;
  width: 16px;
`;

const OutBtn = styled.button`
  margin-top: 16px;
  width: 180px;
  height: 40px;
  background-color: ${theme.lightgray};
  border-radius: 4px;
  text-align: center;
  font-weight: 500;
  letter-spacing: -0.5px;
  font-size: 14px;

  &:hover {
    background-color: #dfdfdf;
  }
`;

const KeepBtn = styled.button`
  margin-top: 16px;
  width: 220px;
  height: 40px;
  color: #fff;
  background-color: ${theme.orange};
  border-radius: 4px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.5px;

  &:hover {
    background-color: #bf3604;
  }
`;
