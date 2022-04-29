import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import ClassDetail from './pages/ClassDetail/ClassDetail';
import Nav from './components/Nav/Nav';
import Search from './pages/Search/Search';
import Login from './pages/Login/Login';
import Auth from './pages/Login/Auth';
import CreatorMain from './pages/Creator/CreatorMain/CreatorMain';
import CreatorMypage from './pages/Creator/CreatorMypage/CreatorMypage';
import Edit from './pages/Creator/CreatorMypage/Product/Edit/Edit';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/class/:classId" element={<ClassDetail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth/callback/kakao" element={<Auth />} />
        <Route path="/creator" element={<CreatorMain />} />
        <Route path="/creator/mypage/:menu" element={<CreatorMypage />} />
        <Route path="/creator/mypage/edit/:menu" element={<Edit />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
