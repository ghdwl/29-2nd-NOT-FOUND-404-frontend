import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../../../../styles/theme';
import Logo404 from '../../../../img/404-logo.svg';
import Modal from './Modal';

function EditHeader() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    document.body.style.overflow = 'hidden';
    setModalOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = '';
    setModalOpen(false);
  };

  return (
    <Header>
      <Wrap>
        <Logo src={Logo404} />
        <Text>상품 작성하기</Text>
      </Wrap>
      <div>
        <Button onClick={openModal}>나가기</Button>
        <Modal
          open={modalOpen}
          close={closeModal}
          setModalOpen={setModalOpen}
        />
      </div>
    </Header>
  );
}

export default EditHeader;

const Header = styled.header`
  position: fixed;
  top: 0px;
  ${theme.flexCustom('', 'space-between', '')}
  padding: 16px 24px;
  width: 100%;
  height: 72px;
  background-color: #fff;
  border-bottom: 1px solid ${theme.lightgray};
`;

const Wrap = styled.section`
  ${theme.flexCustom()}
`;

const Text = styled.p`
  margin-right: 14px;
  letter-spacing: -1px;
`;

const Persent = styled.p`
  font-size: 14px;
  color: ${props => props.theme.orange};
  letter-spacing: -0.5px;
`;

const Button = styled.button`
  width: 68px;
  height: 40px;
  background-color: ${theme.lightgray};
  border-radius: 4px;
  letter-spacing: -0.5px;
  font-size: 14px;
  text-align: center;

  &:hover {
    background-color: #dfdfdf;
  }
`;

const Logo = styled.img`
  margin-right: 10px;
  width: 40px;
`;
