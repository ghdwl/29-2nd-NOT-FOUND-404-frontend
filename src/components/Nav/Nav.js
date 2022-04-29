import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
  HEADER_LEFT_MENU,
  HEADER_RIGHT_MENU,
  CREATOR_HEADER_RIGHT_MENU,
  HEADER_NAVIGATION_MENU,
} from './NavData';
import theme from '../../styles/theme';

const Nav = () => {
  const [bottomMenuDisplay, setBottomMenuDisplay] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const userMenu = useRef();
  const domain = document.location.href.split('/').slice(2)[0];
  const currentLocation = document.location.href.includes(`${domain}/creator`);
  const isLoginBtn = !localStorage.getItem('token') ? '로그인' : '로그아웃';

  const inputValueRecord = event => {
    setInputValue(event.target.value);
  };

  const searchPageMoveHandler = () => {
    navigate('/Search', {
      state: {
        inputValue: inputValue,
      },
    });

    setInputValue('');
  };

  const searchClickHandler = () => {
    if (inputValue.length > 0) {
      searchPageMoveHandler();
    }
  };

  const searchEnterHandler = e => {
    if (e.key === 'Enter' && inputValue.length > 0) {
      searchPageMoveHandler();
    }
  };

  const isLogin = () => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    } else {
      localStorage.removeItem('token');
      alert('로그아웃 되었습니다.');
      document.location.href = 'main';
    }
  };

  const creatorMenuOpenHandler = () => {
    setIsOpen(true);
  };

  const creatorMenuCloseHandler = ({ target }) => {
    if (isOpen && !userMenu.current.contains(target)) setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener('click', creatorMenuCloseHandler);
    return () => {
      window.removeEventListener('click', creatorMenuCloseHandler);
    };
  });

  const storePreventDefault = (name, e) => {
    if (name === '스토어') e.preventDefault();
  };

  const companyPreventDefault = (name, e) => {
    if (name === '기업교육') e.preventDefault();
  };

  const navPreventDefault = (link, e) => {
    if (link === 'none') e.preventDefault();
  };

  const navMenuShowHandler = id => {
    setBottomMenuDisplay([true, id]);
  };

  const navMenuHideHandler = () => {
    setBottomMenuDisplay('');
  };

  if (window.location.pathname.includes('/mypage/edit')) {
    return null;
  }

  return (
    <Wrap>
      {currentLocation ? (
        <CreatorHeaderWrap>
          <CreatorHeaderContainer>
            <CreatorLogoWrap to="/creator/mypage/product">
              <CreatorLogo src="/images/Nav/creator_logo.svg" />
            </CreatorLogoWrap>
            <UserIconWrap>
              <UserIcon
                src="/images/Nav/icon_user.png"
                onClick={creatorMenuOpenHandler}
              />
              {isOpen && (
                <UserMenuWrap ref={userMenu}>
                  {CREATOR_HEADER_RIGHT_MENU.map(({ id, name }) => (
                    <UserMenu key={id} to="/main">
                      {name}
                    </UserMenu>
                  ))}
                  <UserMenu to="/login" onClick={isLogin}>
                    {isLoginBtn}
                  </UserMenu>
                </UserMenuWrap>
              )}
            </UserIconWrap>
          </CreatorHeaderContainer>
        </CreatorHeaderWrap>
      ) : (
        <MainHeaderWrap>
          <HeaderContainer>
            <HeaderLeftContentWrap>
              <Link to="/">
                <Logo src="/images/Nav/header_logo.png" />
              </Link>
              <HeaderMenuWrap>
                {HEADER_LEFT_MENU.map(({ id, name, link }) => (
                  <HeaderLeftMenu
                    to={link}
                    key={id}
                    onClick={e => storePreventDefault(name, e)}
                  >
                    {name}
                  </HeaderLeftMenu>
                ))}
              </HeaderMenuWrap>
              <SearchWrap>
                <SearchInputForm>
                  <SearchInput
                    type="search"
                    autocomplete="off"
                    maxlength="100"
                    placeholder="찾으시는 취미가 있으신가요?"
                    onKeyPress={searchEnterHandler}
                    onChange={inputValueRecord}
                  />
                  <SearchBtn onClick={searchClickHandler}>
                    <SearchBtnIcon src="/images/Nav/icon-search.png" />
                  </SearchBtn>
                </SearchInputForm>
              </SearchWrap>
            </HeaderLeftContentWrap>
            <HeaderRightNavWrap>
              {HEADER_RIGHT_MENU.map(({ id, name, link }) => (
                <HeaderRightNav
                  to={link}
                  key={id}
                  onClick={e => companyPreventDefault(name, e)}
                >
                  {name}
                </HeaderRightNav>
              ))}
              <LoginCheck to="/login" onClick={isLogin}>
                {isLoginBtn}
              </LoginCheck>
            </HeaderRightNavWrap>
          </HeaderContainer>
          <NavContainer>
            <NavContentWrap>
              {HEADER_NAVIGATION_MENU.map(({ id, name }, index) => (
                <NavMenuBtn
                  key={id}
                  onMouseOver={() => navMenuShowHandler(id)}
                  onMouseOut={navMenuHideHandler}
                >
                  {name}
                  <NavMenuWrap state={bottomMenuDisplay} id={id}>
                    {HEADER_NAVIGATION_MENU[index]?.menu.map(
                      ({ id, name, link }) => (
                        <NavMenu
                          key={id}
                          to={link}
                          onClick={e => navPreventDefault(link, e)}
                        >
                          {name}
                        </NavMenu>
                      )
                    )}
                  </NavMenuWrap>
                </NavMenuBtn>
              ))}
            </NavContentWrap>
          </NavContainer>
        </MainHeaderWrap>
      )}
    </Wrap>
  );
};

export default Nav;

const Wrap = styled.header`
  ${theme.flexCustom('center', 'center', 'column')}
`;

const MainHeaderWrap = styled.div`
  ${theme.flexCustom('center', 'center', 'column')}
  width: 100%;
`;

const CreatorHeaderWrap = styled.div`
  ${theme.flexCustom('start', 'flex-start', 'column')}
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 10000;
`;

const CreatorHeaderContainer = styled.div`
  ${theme.flexCustom('start', 'space-between', 'row')}
  width: 100%;
  padding: 24px;
  border-bottom: 1px solid #efefef;
`;

const CreatorLogoWrap = styled(Link)`
  display: block;
`;

const CreatorLogo = styled.img`
  width: 210px;
  object-fit: contain;
`;

const UserIconWrap = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 50%;
`;

const UserIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UserMenuWrap = styled.div`
  ${theme.flexCustom('start', 'center', 'column')}
  position: absolute;
  top: 56px;
  right: 20px;
  min-width: 200px;
  margin-top: 8px;
  padding: 16px 24px;
  background-color: ${theme.white};
  border-radius: 0;
  box-shadow: rgb(0 0 0 / 8%) 0 0 1px, rgb(0 0 0 / 10%) 0 16px 30px 4px;
`;

const UserMenu = styled(Link)`
  ${theme.flexCustom('stretch', 'center', 'column')}
  margin: 0;
  padding-top: 12px;
  padding-bottom: 12px;
  color: ${theme.realblack};
  border: 0;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.125rem;
  cursor: unset;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-align: stretch;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const HeaderContainer = styled.div`
  ${theme.flexCustom('center', 'space-between', 'row')}
  width: 100%;
  max-width: 1176px;
  padding: 20px 0;
`;

const Logo = styled.img`
  height: 20px;
  margin-right: 28px;
  margin-top: 3px;
`;

const HeaderMenuWrap = styled.span`
  align-items: center;
  margin-right: 90px;
`;

const HeaderLeftContentWrap = styled.div`
  ${theme.flexCustom('center', 'center', 'row')}
`;

const HeaderLeftMenu = styled(Link)`
  color: ${theme.black};
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.625rem;
  white-space: nowrap;

  &:first-child {
    margin-right: 15px;
    color: ${theme.orange};
  }
`;

const SearchWrap = styled.div`
  width: 420px;
  margin: 0;
`;

const SearchInputForm = styled.form`
  flex: 1 1 0%;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  margin: 0;
  padding: 12px 52px 12px 16px;
  box-sizing: border-box;
  background: ${theme.lightgray};
  color: ${theme.black};
  border: 1px solid ${theme.lightgray};
  border-radius: 24px;
  font-size: 14px;
  font-weight: normal;
  text-align: left;
  line-height: 20px;
  letter-spacing: -0.15px;
`;

const SearchBtn = styled.button`
  position: absolute;
  right: 16px;
  top: calc(50% - 10px);
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`;

const SearchBtnIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const HeaderRightNavWrap = styled.div`
  display: flex;
`;

const HeaderRightNav = styled(Link)`
  margin-right: 24px;
  font-size: 14px;

  &:last-child {
    margin-right: 0;
  }
`;

const LoginCheck = styled(Link)`
  margin-right: 24px;
  font-size: 14px;

  &:last-child {
    margin-right: 0;
  }
`;

const NavContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: ${theme.white};
  box-shadow: rgb(239 239 239) 0 -1px 0 inset;
`;

const NavContentWrap = styled.nav`
  ${theme.flexCustom('center', 'flex-start', 'row')}
  position: relative;
  width: 100%;
  max-width: 1176px;
  margin: 0 auto;
  -webkit-box-align: center;
  background-color: ${theme.white};
  box-shadow: rgb(239 239 239) 0 -1px 0 inset;
`;

const NavMenuBtn = styled.button`
  display: flex;
  position: relative;
  margin: 0 28px 0 0;
  padding: 8px 0 20px;
  box-sizing: border-box;
  background-color: transparent;
  color: ${theme.black};
  border: none;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
  font-weight: bold;
  white-space: nowrap;
  outline: none;
  cursor: pointer;

  &:before {
    content: '';
    display: none;
    position: absolute;
    width: 100%;
    bottom: 10px;
    border: 1px solid #1a1a1a;
  }

  &:hover:before {
    display: block;
  }
`;

const NavMenuWrap = styled.div`
  display: ${({ state, id }) =>
    state[0] === true && state[1] === id ? 'block' : 'none'};
  position: absolute;
  top: 52px;
  left: -12px;
  width: 220px;
  padding: 20px 12px;
  margin-left: -20px;
  background-color: ${theme.white};
  border: 1px solid #efefef;
  border-top: none;
  z-index: 9999;
`;

const NavMenu = styled(Link)`
  ${theme.flexCustom('center', 'space-between', 'row')}
  padding: 8px 8px 8px 20px;
  margin: 0;
  color: ${theme.black};
  font-size: 14px;
  font-weight: normal;
  line-height: 18px;
  -webkit-box-align: center;
  -webkit-box-pack: justify;
  cursor: pointer;

  &:hover {
    background: ${theme.lightgray};
  }
`;
