import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Rating } from 'react-simple-star-rating';
import styled from 'styled-components';
import theme, {
  Heading,
  NormalText,
  StyledButton,
} from '../../../../styles/theme';

const WriteReviewModal = ({ isModalOpen, setIsModalOpen }) => {
  const [ratingValue, setRatingValue] = useState(0);
  const [reviewValue, setReviewValue] = useState('');

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : null;
  }, [isModalOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
    setRatingValue(0);
    setReviewValue('');
  };

  const handleRating = rate => {
    setRatingValue(rate);
  };

  const handlePost = event => {
    setReviewValue(event.target.value);
  };

  const submitPost = event => {
    event.preventDefault();
    // TODO: 서버 통신 예정
    alert(reviewValue);
    closeModal();
  };

  return (
    <Modal isOpen={isModalOpen} style={modalStyles}>
      <Form onSubmit={submitPost}>
        <FlexWrapper>
          <Heading>글 작성하기</Heading>
          <CloseBtn type="button" onClick={closeModal}>
            <i className="fa-solid fa-xmark" />
          </CloseBtn>
        </FlexWrapper>

        <FlexWrapper>
          <Writer>
            <i className="fa-solid fa-circle-user" />
            <span>무한리더</span>
          </Writer>
          <FileLabel>
            <input type="file" accept="image/*" />
            <AddFileBtn type="button">
              <i className="fa-solid fa-image" />
              <span>사진 첨부</span>
            </AddFileBtn>
          </FileLabel>
        </FlexWrapper>

        <RatingWrapper>
          <Rating
            showTooltip
            ratingValue={ratingValue}
            onClick={handleRating}
            tooltipDefaultText="이 클래스는 어땠나요?"
            tooltipArray={[
              '별로였어요',
              '조금 아쉬워요',
              '보통이에요',
              '만족했어요',
              '너무 좋아요',
            ]}
          />
        </RatingWrapper>

        <SubHeading>
          클래스의 경험을
          <br />
          자세하게 알려주세요.
        </SubHeading>
        <TextArea
          name="content"
          placeholder="클래스를 수강하면서 어떠셨나요? 작품을 만드는 과정에 있었던 경험, 완성했던 경험, 배운 걸 적용했던 경험 등을 공유해 주세요."
          autocomplete="off"
          onInput={handlePost}
        />

        <SubmitBtnWrapper>
          <SubmitBtn>
            <div>저장하기</div>
          </SubmitBtn>
        </SubmitBtnWrapper>
      </Form>
    </Modal>
  );
};

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    maxWidth: '640px',
    minHeight: 'calc(100vh - 60px)',
    padding: 'auto',
    transform: 'translate(-50%, -50%)',
    zIndex: '100',
  },
  overlay: {
    backgroundColor: 'rgba(248, 248, 248, 0.9)',
    zIndex: '80',
  },
};

const CloseBtn = styled.button`
  i {
    font-size: 24px;
  }
`;

const Form = styled.form`
  padding: 24px;
`;

const FlexWrapper = styled.div`
  ${theme.flexCustom('center', 'space-between')}
  margin-bottom: 16px;
`;

const Writer = styled.div`
  ${NormalText}
  flex-grow: 1;

  i {
    vertical-align: middle;
    color: ${theme.silvergray};
    font-size: 24px;
  }

  span {
    margin-left: 8px;
  }
`;

const FileLabel = styled.label`
  cursor: pointer;

  input[type='file'] {
    display: none;
  }
`;

const AddFileBtn = styled(StyledButton)`
  background-color: ${theme.lightgray};
  font-weight: normal;
  line-height: 1;
  pointer-events: none;

  i {
    margin-right: 4px;
    font-size: 16px;
  }
`;

const RatingWrapper = styled.div`
  margin: 36px 0;
  border: 1px solid ${theme.lightgray};
  text-align: center;
`;

const SubHeading = styled.h6`
  margin: 24px 0;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  line-height: 36px;
`;

const TextArea = styled.textarea`
  ${NormalText}
  width: 100%;
  min-height: 280px;
  max-height: calc(100vh - 240px);
  padding: 16px;
  border: 1px solid ${theme.palegray};
  outline: none;
  background-color: transparent;
  font-family: inherit;
  resize: none;

  &::placeholder {
    color: ${theme.silvergray};
  }
`;

const SubmitBtnWrapper = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0;
  display: flex;
  width: 100%;
  padding: 12px;
  border-top: 1px solid ${theme.lightgray};
  background-color: ${theme.white};
  transform: translateX(-50%);
`;

const SubmitBtn = styled(StyledButton)`
  flex: 1 1 0;
  max-width: 640px;
  height: 48px;
  background-color: ${theme.orange};
  color: ${theme.white};
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  z-index: 500;

  &:hover {
    background-color: ${theme.darkorange};
  }
`;

export default WriteReviewModal;
