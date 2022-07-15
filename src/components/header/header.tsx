import React from 'react';
import styled from 'styled-components';

import { StdButton } from '../../parts/buttons';
import { MainContainer } from '../../styles/container';
const { Header } = MainContainer;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  align-items: 5px;
`;

const Title = styled.span`
  color: #fff;
  font-size: 15px;
  display: block;
`;

const HeaderCompo = () => {
  return (
    <Header>
      <Wrapper>
        <Title>documents</Title>
        <StdButton name='load' func={() => {}} />
      </Wrapper>
    </Header>
  );
};

export default HeaderCompo;
