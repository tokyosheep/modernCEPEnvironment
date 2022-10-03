import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../redux/app/hooks';
import { StdButton } from '../../parts/buttons';
import { SendHostScript } from '../../fileSystem/connect';

import { MainContainer } from '../../styles/container';
const { Footer } = MainContainer;

const FooterTitle = styled.span`
  color: #fff;
  font-size: 12px;
  font-weight: 300;
`;

const FooterCompo = () => {
  const documents = useAppSelector(state => state.documents.value);
  const inspectPolyfill = async () => {
    try {
      const connect = new SendHostScript();
      const result = await connect.callHostScript({ func: 'inspectPolyfill' });
      console.log(result.param);
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <Footer>
      <FooterTitle>{documents.length} documents</FooterTitle>
      <StdButton name='polyfill' func={inspectPolyfill}/>
    </Footer>
  );
};

export default FooterCompo;
