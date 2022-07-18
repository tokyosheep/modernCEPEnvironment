import React from 'react';
import styled from 'styled-components';

import DocumentBox from './documentBox/documentBox';
import { MainContainer } from '../../styles/container';
import { useAppSelector } from '../../redux/app/hooks';
const { Main } = MainContainer;

const ListWrapper = styled.ul`
    list-style:none;
    padding: 10px;
    box-sizing: border-box;
`;

const MainCompo = () => {
  const documents = useAppSelector(state => state.documents.value);
  const documentList = documents.map((doc, i) => {
    return (
        <DocumentBox {...doc} key={i} />
    )
  })
  return (
    <Main>
      <ListWrapper>
        {documentList}
      </ListWrapper>
    </Main>
  );
};

export default MainCompo;
