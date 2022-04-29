import React, { useState, useEffect } from 'react';
import SearchProduct from './SearchProduct';
import { api } from '../../config';
import styled from 'styled-components';
import theme from '../../styles/theme';

const Search = () => {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    fetch(api.product_list, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setSearchData(data.random_products));
  }, []);

  const result = searchData.filter(word => word.title.includes('자바'));

  return (
    <Wrap>
      <ContentsWrap>
        <FillterWrap>
          {FILTER_MAIN_CATEGORY.map(({ id, name }) => (
            <FillterMapWrap key={id}>
              <FilterMain>
                <FilterMainTxt>{name}</FilterMainTxt>
                <ArrowDownIcon src="/images/Search/icon_down_arrow.png" />
              </FilterMain>
              {id === 1 &&
                FILTER_OPEN_TIME.map(({ id, name }) => (
                  <FilterMain key={id}>
                    <FilterMainTxt>{name}</FilterMainTxt>
                  </FilterMain>
                ))}
            </FillterMapWrap>
          ))}
        </FillterWrap>
        <ProductListWrap>
          {result?.length === 0 ? (
            <NoneSearchWrap>
              <NoneSearchTitle>
                <NoneSearchValue>검색어</NoneSearchValue>에 대한 검색 결과가
                없습니다.
              </NoneSearchTitle>
              <NoneSearchCheck>
                찾고자 하는 검색어를 확인하시고
                <br />
                다시 검색해 주세요
              </NoneSearchCheck>
            </NoneSearchWrap>
          ) : (
            <ProductWrap>
              {result?.map(props => (
                <SearchProduct key={props.id} props={props} />
              ))}
            </ProductWrap>
          )}
          {result?.length > 0 && (
            <PagenationWrap>
              <PageButtonInactive>
                <span>&#60;</span>
              </PageButtonInactive>
              <PageButtonInactive>
                <span>1</span>
              </PageButtonInactive>
              <PageButtonInactive>
                <span>&#62;</span>
              </PageButtonInactive>
            </PagenationWrap>
          )}
        </ProductListWrap>
      </ContentsWrap>
    </Wrap>
  );
};

export default Search;

const Wrap = styled.section`
  ${theme.flexCustom('center', 'center', 'column')};
  flex: 1 1 0%;
  width: 100%;
`;

const ContentsWrap = styled.div`
  position: relative;
  width: 1176px;
  min-height: 300px;
  padding-top: 24px;
  padding-bottom: 32px;
  overflow: unset;
`;

const FillterWrap = styled.div`
  display: flex;
  max-width: 1176px;
  margin-bottom: 24px;
`;

const FillterMapWrap = styled.div`
  display: flex;
`;

const FilterMain = styled.button`
  ${theme.flexCustom('center', 'center', 'row')};
  height: 40px;
  padding: 12px 16px;
  margin-right: 8px;
  color: ${theme.realblack};
  border: 1px solid ${theme.palegray};
  border-radius: 2px;
  font-weight: normal;
  font-size: 14px;
`;

const FilterMainTxt = styled.span`
  ${theme.flexCustom('center', 'center', 'column')};
  flex: 0 0 auto;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  color: ${theme.black};
`;

const ArrowDownIcon = styled.img`
  width: 9px;
  height: 9px;
  margin-left: 7px;
  object-fit: cover;
`;

const ProductListWrap = styled.div`
  flex: 1 1 0%;
  width: 100%;
  padding-bottom: 82px;
`;

const ProductWrap = styled.ul`
  ${theme.flexCustom('stretch', 'flex-start', 'row')};
  flex-wrap: wrap;
  margin: 0px -12px -32px;
  padding: 0px;
  list-style: none;
  -webkit-box-pack: start;
`;

const NoneSearchWrap = styled.div`
  ${theme.flexCustom('center', 'center', 'column')};
  width: 100%;
  height: 600px;
  -webkit-box-align: center;
`;

const NoneSearchTitle = styled.h6`
  margin-bottom: 10px;
  color: ${theme.black};
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: -0.45px;
`;

const NoneSearchValue = styled.strong`
  color: ${theme.orange};
`;

const NoneSearchCheck = styled.span`
  margin: 0px;
  color: ${theme.black};
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.15px;
  text-align: center;
`;

const PagenationWrap = styled.div`
  ${theme.flexCustom('center', 'center', 'row')};
  width: 100%;
  margin-top: 32px;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  display: none;
`;

const PageButtonInactive = styled.button`
  display: inline-flex;
  width: auto;
  align-items: center;
  height: 32px;
  margin: 5px;
  padding: 0px 12px;
  border-radius: 3px;
  color: #3a3a3a;
  background-color: ${theme.white};
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.2px;
  text-decoration-line: none;
  vertical-align: middle;
  transition: background-color 0.1s ease 0s;

  &:hover {
    background-color: #e6e6e6;
  }

  &:first-child {
    color: ${theme.black};
    background-color: ${theme.lightgray};

    &:hover {
      background-color: #e6e6e6;
    }
  }

  &:last-child {
    color: ${theme.black};
    background-color: rgb(248, 248, 248);

    &:hover {
      background-color: ${theme.lightgray};
    }
  }
`;

const FILTER_MAIN_CATEGORY = [
  {
    id: 1,
    name: '카테고리',
  },
  {
    id: 2,
    name: '클래스 종류',
  },
  {
    id: 3,
    name: '정확도순',
  },
];

const FILTER_OPEN_TIME = [
  {
    id: 1,
    name: '바로 수강',
  },
  {
    id: 2,
    name: '얼리버드',
  },
  {
    id: 3,
    name: '오픈 예정',
  },
];
