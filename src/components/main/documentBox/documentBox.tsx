import React, { FC } from 'react';
import styled from 'styled-components';

import { DocumentType } from '../../../redux/types/documentType';
import LayerBox from './layerBox';

const Wrapper = styled.li`
  width: 100%;
  height: auto;
  padding: 20px;
  box-sizing: border-box;
  background: #5b578b;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.3) inset;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const DocumentTitle = styled.span`
  color: #fff;
  font-size: 20px;
  font-weight: 300;
`;

const LayerWrapper = styled.ul`
  list-style:none;
`;

const DocumentBox:FC<DocumentType> = ({ name, layers }) => {
  const layerList = layers.map((lay, i) => {
    return (
        <LayerBox key={i} {...lay} />
    )
  })
  return (
    <Wrapper>
      <DocumentTitle>{name}</DocumentTitle>
      <LayerWrapper>
        {layerList}
      </LayerWrapper>
    </Wrapper>
  );
};

export default DocumentBox;
