import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../redux/app/hooks';

import { MainContainer } from '../../styles/container';
const { Footer } = MainContainer;

const FooterTitle = styled.span`
  color: #fff;
  font-size: 12px;
  font-weight: 300;
`;

const FooterCompo = () => {
  const documents = useAppSelector(state => state.documents.value);
  return (
    <Footer>
      <FooterTitle>{documents.length} documents</FooterTitle>
    </Footer>
  );
};

export default FooterCompo;
