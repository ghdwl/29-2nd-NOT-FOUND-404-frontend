import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../../styles/theme';

export const Cate = ({ sidebar }) => {
  const subcate = sidebar.subcate;
  const [viewCate, setviewCate] = useState(true);
  const [pathName, setPathName] = useState('');
  const params = useParams();

  const clickCate = () => {
    setviewCate(viewCate => !viewCate);
  };

  useEffect(() => {
    setPathName(params.menu);
  }, [params]);

  return (
    <>
      <Category onClick={clickCate} key={sidebar.id}>
        <Icon src={sidebar.icon} />
        {sidebar.cate}
        <Button
          className={viewCate ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}
        />
      </Category>
      <div>
        {viewCate &&
          subcate.map((list, idx) => {
            return (
              <SideBar key={list}>
                <Warp>
                  <TabSubCate>
                    <Link to={`/creator/mypage/${list.link}`}>
                      <SubCateWrap
                        className={list.link === pathName ? 'btn click' : 'btn'}
                      >
                        {list.subcateTitle}
                      </SubCateWrap>
                    </Link>
                  </TabSubCate>
                </Warp>
              </SideBar>
            );
          })}
      </div>
    </>
  );
};

const Category = styled.button`
  ${theme.flexCustom('center', 'none', '')}
  position: relative;
  padding: 12px;
  width: 215px;
  height: 44px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background-color: ${theme.lightgray};
  }
`;

const Icon = styled.img`
  margin-right: 20px;
  width: 18px;
`;

const Button = styled.button`
  position: absolute;
  right: 12px;
  font-size: 14px;
`;

const SideBar = styled.div`
  position: relative;
  width: 239px;
`;

const Warp = styled.div`
  ${theme.flexCustom('center', 'center', 'column')}
  left: 0px;
  width: 239px;
`;

const TabSubCate = styled.button`
  padding: 12px 0px 12px 0px;
  width: 215px;
  height: 44px;
  border-radius: 4px;
  font-size: 14px;

  .btn {
    position: absolute;
    top: 0;
    width: 215px;
    height: 44px;
    border-radius: 4px;
  }

  .click {
    background-color: ${theme.lightgray};
  }

  &:hover {
    background-color: ${theme.lightgray};
  }
`;

const SubCateWrap = styled.div`
  ${theme.flexCustom('center', 'none', '')}
  padding-left: 50px;
`;
