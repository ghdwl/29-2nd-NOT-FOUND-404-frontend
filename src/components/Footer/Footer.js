import React from 'react';
import styled from 'styled-components';
import {
  LANGUAGE_SOCIAL_LIST,
  CUSTOMER_LIST,
  FOOTER_NAV_LIST_CLASS,
  FOOTER_NAV_LIST_CREATOR,
  FOOTER_CONTACT_TEXT,
} from './FooterData';
import theme from '../../styles/theme';

const Footer = () => {
  if (window.location.pathname.includes('/mypage')) {
    return null;
  }
  return (
    <Wrap>
      <ContentsWrap>
        <NavContentsWrap>
          <LogoWrap>
            <FooterTitle src="/images/Footer/header_logo.png" />
            <FooterSubTxt>
              NOTFOUND404는 모든 사람이 사랑하는 일을 하며
              <br /> 살 수 있도록 세상을 바꾸고자 합니다.
            </FooterSubTxt>
            <CurrentLanguage>🇰🇷 한국어/ 한국 스토어</CurrentLanguage>
          </LogoWrap>
          <ContentWrap>
            <ContentTitle>NOTFOUND404</ContentTitle>
            {FOOTER_NAV_LIST_CLASS.map(({ id, name }) => (
              <ContentTitleList key={id}>{name}</ContentTitleList>
            ))}
          </ContentWrap>
          <ContentWrap>
            <ContentTitle>크리에이터</ContentTitle>
            {FOOTER_NAV_LIST_CREATOR.map(({ id, name }) => (
              <ContentTitleList key={id}>{name}</ContentTitleList>
            ))}
          </ContentWrap>
          <ContentWrap>
            <ContentTitle>고객센터</ContentTitle>
            <CustomerBtn>문의하기</CustomerBtn>
            <CustomerText>
              오전 10시 ~ 오후 6시 (주말, 공휴일 제외)
            </CustomerText>
          </ContentWrap>
        </NavContentsWrap>
        <BottomContentsWrap>
          <LanguageListWrap>
            {LANGUAGE_SOCIAL_LIST.map(({ id, name }) => (
              <LanguageList key={id}>{name}</LanguageList>
            ))}
          </LanguageListWrap>
          <ContactListWrap>
            {CUSTOMER_LIST.map(({ id, name }) => (
              <LanguageList key={id}>{name}</LanguageList>
            ))}
            <ContactInformation>{FOOTER_CONTACT_TEXT}</ContactInformation>
          </ContactListWrap>
        </BottomContentsWrap>
      </ContentsWrap>
    </Wrap>
  );
};

const Wrap = styled.footer`
  ${theme.flexCustom('center', 'center', 'row')};
  padding-top: 40px;
  padding-bottom: 64px;
  margin-top: 100px;
  border-top: 1px solid ${theme.lightgray};
  background-color: ${theme.white};
`;

const ContentsWrap = styled.div`
  ${theme.flexCustom('initial', 'initial', 'column')};
  width: 100%;
  max-width: 1176px;
`;

const NavContentsWrap = styled.div`
  ${theme.flexCustom('initial', 'initial', 'row')};
`;

const LogoWrap = styled.div`
  ${theme.flexCustom('initial', 'initial', 'column')};
  flex-basis: 398px;
  flex-shrink: 0;
  margin-top: 24px;
`;

const FooterTitle = styled.img`
  width: 180px;
  object-fit: contain;
`;

const FooterSubTxt = styled.span`
  margin-top: 20px;
  color: ${theme.darkgray};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.15px;
  font-feature-settings: 'case', 'ss02';
`;

const CurrentLanguage = styled.button`
  margin-top: 20px;
  color: ${theme.darkgray};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.15px;
`;

const ContentWrap = styled.div`
  flex-grow: 0;
  max-width: 272px;
  width: 100%;
  margin-top: 24px;
`;

const ContentTitle = styled.h2`
  margin-bottom: 8px;
  color: ${theme.black};
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  letter-spacing: -0.15px;
`;

const ContentTitleList = styled.span`
  display: block;
  flex: 1 1 0%;
  padding: 8px 0;
  margin: 0px;
  color: ${theme.black};
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: -0.15px;
`;

const CustomerBtn = styled.button`
  width: 100%;
  height: 40px;
  padding: 0px;
  color: ${theme.black};
  background-color: ${theme.lightgray};
  border-radius: 3px;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  transition: background-color 0.1s ease 0s;
  text-decoration-line: none;

  &:hover {
    background-color: #ddd;
  }
`;

const CustomerText = styled.span`
  display: block;
  margin-top: 12px;
  color: ${theme.gray};
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.15px;
  text-align: center;
`;

const BottomContentsWrap = styled.div`
  ${theme.flexCustom('initial', 'initial', 'row')};
  margin-top: 80px;
  border-top: 1px solid ${theme.lightgray};
`;

const LanguageListWrap = styled.div`
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  flex-basis: 398px;
  flex-shrink: 0;
  flex-wrap: wrap;
  padding-right: 78px;
  margin-top: 24px;
`;

const LanguageList = styled.span`
  display: inline-flex;
  color: ${theme.gray};
  font-size: 11px;
  line-height: 16px;

  &::after {
    content: '･';
    display: block;
    width: 24px;
    height: 16px;
    text-align: center;
  }

  &:last-child::after {
    display: none;
  }

  &:nth-child(10)::after {
    display: none;
  }
`;

const ContactInformation = styled.span`
  margin-top: 16px;
  color: ${theme.silvergray};
  font-style: normal;
  font-weight: normal;
  font-size: 9px;
  line-height: 12px;
  font-feature-settings: 'case', 'ss02';
`;

const ContactListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
`;

export default Footer;
