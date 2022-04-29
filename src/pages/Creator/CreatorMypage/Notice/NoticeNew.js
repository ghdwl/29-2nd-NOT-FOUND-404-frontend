import React from 'react';
import styled from 'styled-components';
import theme from '../../../../styles/theme';
import QuillContainer from './QuillContainer';

function NoticeNew({ setNotice }) {
  const handleNotice = () => {
    setNotice(false);
  };

  return (
    <div>
      <NewWarp>
        <Warp>
          <Select>
            <option>공지사항</option>
            <option>FAQ</option>
          </Select>
          <Input type="text" placeholder="제목을 입력해 주세요" />
        </Warp>
        <AddFile>
          <Button>
            <label>
              <i class="fa-solid fa-paperclip" style={{ marginRight: '8px' }} />
              파일 첨부
              <input type="file" style={{ display: 'none' }} />
            </label>
          </Button>
        </AddFile>
        <QuillContainer />
      </NewWarp>
      <BtnWarp>
        <BackBtn onClick={handleNotice}>목록으로</BackBtn>
        <SubmitBtn>발행하기</SubmitBtn>
      </BtnWarp>
    </div>
  );
}

export default NoticeNew;

const NewWarp = styled.div`
  padding: 24px;
  width: 545px;
  border: 1px solid ${theme.lightgray};
  box-shadow: 0px 2px 8px #efefef;
`;

const Select = styled.select`
  padding: 0px 48px 0px 16px;
  width: 150px;
  height: 48px;
  border: none;
  border-radius: 4px 0px 0px 4px;
  -webkit-appearance: none;
`;

const Warp = styled.section`
  box-shadow: 0px 2px 4px #efefef;
`;

const Input = styled.input`
  padding: 0px 16px;
  width: 345px;
  height: 48px;
  border: none;
  border-left: 1px solid #efefef;
  border-radius: 0px 4px 4px 0px;

  &::placeholder {
    color: ${theme.silvergray};
  }
`;

const AddFile = styled.div`
  display: flex;
  padding-top: 24px;
  margin-bottom: 24px;
`;

const Button = styled.button`
  padding: 0px 16px;
  height: 40px;
  background: ${theme.lightgray};
  border-radius: 3px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

const BtnWarp = styled.section`
  ${theme.flexCustom('', 'space-between', '')}
  margin-top: 24px;
`;

const BackBtn = styled.button`
  padding: 0px 16px;
  height: 40px;
  background: ${theme.lightgray};
  border-radius: 3px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.5px;

  &:hover {
    background-color: #dfdfdf;
  }
`;

const SubmitBtn = styled.button`
  padding: 0px 16px;
  height: 40px;
  background: ${theme.orange};
  border-radius: 3px;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.5px;

  &:hover {
    background-color: #bf3604;
  }
`;
