import React, { useMemo } from 'react';
import { init } from '../fileSystem/init';

import HeaderCompo from '../components/header/header';
import MainCompo from '../components/main/mainCompo';
import FooterCompo from '../components/footer/footer';
import { MainContainer } from '../styles/container';
const { Container } = MainContainer;

const Layout = () => {
  useMemo(() => {
    init();
  }, []);
  return (
    <Container>
      <HeaderCompo />
      <MainCompo />
      <FooterCompo />
    </Container>
  );
};

export default Layout;
