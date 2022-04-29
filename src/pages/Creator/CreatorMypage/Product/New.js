import React from 'react';
import styled from 'styled-components';
import theme from '../../../../styles/theme';
import Product from './Product';
import NEW_PRODUCT_DATA from './NewProductData';

function New() {
  return (
    <Wrapper>
      <Title>어떤 상품으로 시작할까요?</Title>
      <H6>10분이면 등록 완료! 새로운 삶을 시작해보세요.</H6>
      <ProductsWrap>
        {NEW_PRODUCT_DATA.map(item => {
          return <Product key={item} item={item} />;
        })}
      </ProductsWrap>
    </Wrapper>
  );
}

export default New;

const Wrapper = styled.div`
  ${theme.flexCustom('center', 'center', 'column')}
  width: 1230px;
  padding: 40px 0px 24px;
`;

const Title = styled.h3`
  margin-bottom: 16px;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -1px;
`;

const H6 = styled.h6`
  margin-bottom: 48px;
  font-size: 18px;
  color: ${theme.gray};
  letter-spacing: -0.5px;
`;

const ProductsWrap = styled.section`
  display: flex;
`;
