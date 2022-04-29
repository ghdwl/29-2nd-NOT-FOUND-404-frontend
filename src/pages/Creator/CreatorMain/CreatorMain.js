import React from 'react';
import styled from 'styled-components';
import CreatorMainItem from './CreatorMainItem';
import CreatorMainReview from './CreatorMainReview';
import CreatorMainRecord from './CreatorMainRecord';
import CreatorMainQnA from './CreatorMainQnA';
import CREATOR_MAIN_DATA from './creatorMainData';
import theme from '../../../styles/theme';

function CreatorMain() {
  const goToMypage = () => {
    window.location.replace('/creator/mypage/product');
  };
  return (
    <CreatorMainWrap>
      <Wrapper>
        <SectionA>
          <div>
            <H2>
              클래스들은 첫 달 평균
              <br />
              <ColorOrange>3,864,865원</ColorOrange>을 정산받아요
            </H2>
            <Height />
            <Button orangeBtn onClick={goToMypage}>
              3초만에 크리에이터 시작하기
            </Button>
          </div>
          <VisualImg src={CREATOR_MAIN_DATA[0].mainImg} />
        </SectionA>
      </Wrapper>
      <Box primary>
        <Wrapper>
          <Row>
            <H4 colorWhite>
              낫파운드404로
              <br />
              경제적 자유를 얻으세요
            </H4>
            <RecordWrapper>
              {CREATOR_MAIN_DATA[0].record &&
                CREATOR_MAIN_DATA[0].record.map(data => {
                  return <CreatorMainRecord key={data} data={data} />;
                })}
            </RecordWrapper>
          </Row>
        </Wrapper>
      </Box>
      <MarginBottom />
      <Wrapper>
        <H4>
          이미 많은 크리에이터 분들이
          <br />
          새로운 삶을 시작했어요
        </H4>
        <Height />
        <Row>
          {CREATOR_MAIN_DATA[0].creator &&
            CREATOR_MAIN_DATA[0].creator.map(data => {
              return <CreatorMainReview key={data} data={data} />;
            })}
        </Row>
      </Wrapper>
      <MarginBottom />
      <Wrapper>
        <H4>
          모든 고민에 대한
          <br />
          해답이 준비돼 있어요
        </H4>
        <Height />
      </Wrapper>
      {CREATOR_MAIN_DATA[0].item &&
        CREATOR_MAIN_DATA[0].item.map(data => {
          return <CreatorMainItem key={data} data={data} />;
        })}
      <MarginBottom />
      <Wrapper>
        <H4>자주 묻는 질문</H4>
        <Height />
        {CREATOR_MAIN_DATA[0].QnA &&
          CREATOR_MAIN_DATA[0].QnA.map(data => {
            return <CreatorMainQnA key={data} data={data} />;
          })}
      </Wrapper>
      <MarginBottom />
      <Box>
        <Wrapper>
          <Section>
            <H4 colorWhite>
              망설이지 마세요,
              <br />
              새로운 크리에이터로서의 삶
            </H4>
            <Button className="something" onClick={goToMypage}>
              3초만에 크리에이터 시작하기
            </Button>
          </Section>
        </Wrapper>
      </Box>
    </CreatorMainWrap>
  );
}

export default CreatorMain;

const CreatorMainWrap = styled.section`
  margin-top: 83px;
`;

const Wrapper = styled.div`
  margin: auto;
  width: 1304px;
`;

const Row = styled.div`
  ${theme.flexCustom('', 'space-between', '')}
`;

const Height = styled.div`
  height: 40px;
`;

const MarginBottom = styled.div`
  margin-bottom: 120px;
`;

const SectionA = styled.section`
  ${theme.flexCustom('', 'space-between', '')}
  height: 620px;
`;

const Button = styled.button.attrs(() => ({ tabIndex: 0 }))`
  width: 230px;
  height: 50px;
  text-align: center;
  color: #fff;
  background-color: ${theme.orange};
  border-radius: 4px;
  font-weight: 700;

  &:hover {
    background-color: #f63006;
  }

  &.something {
    background-color: ${theme.black};
  }
`;

const H2 = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: -1px;
`;

const ColorOrange = styled.span`
  color: ${theme.orange};
`;

const H4 = styled.h4`
  color: ${props => (props.colorWhite ? 'white' : theme.black)};
  font-size: 26px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -1px;
`;

const VisualImg = styled.img`
  width: 652px;
  height: 620px;
  object-fit: cover;
`;

const RecordWrapper = styled.div`
  display: flex;
`;

const Box = styled.div`
  ${theme.flexCustom()}
  width: 100%;
  height: ${props => (props.primary ? '190px' : '170px')};
  background-color: ${theme.orange};
`;

const Section = styled.div`
  ${theme.flexCustom('', 'space-between', '')}
`;
