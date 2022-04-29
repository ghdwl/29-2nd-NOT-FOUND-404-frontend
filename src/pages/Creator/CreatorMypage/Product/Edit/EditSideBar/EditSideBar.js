import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CREATOR_EDIT_SIDEBAR_LIST from './EditSideBarData';
import styled from 'styled-components';
import theme from '../../../../../../styles/theme';

function EditSideBar() {
  const [pathName, setPathName] = useState('');
  const params = useParams();

  useEffect(() => {
    setPathName(params.menu);
  }, [params]);

  return (
    <SideBarWarp>
      <CategoryWarp>
        <TabCate>
          {CREATOR_EDIT_SIDEBAR_LIST.map(cate => {
            return (
              <div key={cate}>
                <Link to={`/creator/mypage/edit/${cate.link}`}>
                  <CateBtn
                    className={cate.link === pathName ? 'btn click' : 'btn'}
                  >
                    <TabNum>
                      <div
                        className={cate.link === pathName ? 'num click' : 'num'}
                      >
                        {cate.number}
                      </div>
                    </TabNum>
                    {cate.cate}
                  </CateBtn>
                </Link>
              </div>
            );
          })}
        </TabCate>
      </CategoryWarp>
    </SideBarWarp>
  );
}

export default EditSideBar;

const SideBarWarp = styled.section`
  ${theme.flexCustom('', 'none', 'column')}
  position: fixed;
  left: 0px;
  top: 8px;
  width: 280px;
  border-right: 1px solid #f8f8f8;
  height: 100vh;
  background-color: #fff;
`;

const CategoryWarp = styled.section`
  position: absolute;
  top: 80px;
`;

const TabCate = styled.ul`
  ${theme.flexCustom('', 'none', 'column')}
  margin-bottom: 10px;
  padding: 12px;
  position: relative;
  width: 248px;
  height: 48px;
  font-weight: 500;
  color: ${theme.gray};
  letter-spacing: -1px;

  .btn {
    width: 248px;
    padding: 15px 10px;
    cursor: pointer;

    &:hover {
      border-radius: 4px;
      background-color: ${theme.palegray};
    }
  }

  .click {
    background-color: ${theme.lightgray};
    color: black;
    border-radius: 4px;
    font-weight: 700;
  }
`;

const CateBtn = styled.button`
  display: flex;
  align-items: center;
`;

const TabNum = styled.button`
  ${theme.flexCustom()}
  margin-right: 12px;
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid #efefef;
  font-size: 11px;

  .num {
    ${theme.flexCustom()}
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-radius: 6px;
  }

  .click {
    border-radius: 6px;
    border: 1px solid black;
  }
`;
