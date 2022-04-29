import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../../styles/theme';

function Product({ item }) {
  return (
    <Box>
      <Img src={item.img} alt={item.title} />
      <Title>{item.title}</Title>
      <Text>{item.text}</Text>
      <Link to={item.link}>
        <Button>만들기</Button>
      </Link>
    </Box>
  );
}

const Box = styled.div`
  ${theme.flexCustom('center', 'center', 'column')}
  margin: 0px 12px;
  padding: 24px;
  width: 290px;
  height: 302px;
  background-color: white;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 2px 6px 30px ${theme.ghostgray};

  &:hover {
    box-shadow: 2px 6px 30px 1px ${theme.palegray};
    -webkit-animation: slide-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    @-webkit-keyframes slide-top {
      0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
      100% {
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px);
      }
    }
    @keyframes slide-top {
      0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
      100% {
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px);
      }
    }
  }
`;

const Img = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
`;

const Title = styled.h6`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

const Text = styled.p`
  font-size: 14px;
  color: ${theme.gray};
`;

const Button = styled.button`
  margin-top: 28px;
  width: 242px;
  height: 44px;
  color: ${theme.darkgray};
  border-radius: 2px;
  background-color: ${theme.lightgray};
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.5px;

  &:hover {
    background-color: ${theme.ghostgray};
  }
`;

export default Product;
