import React, { FC } from 'react';
import styled from 'styled-components';

import { LayerType } from '../../../redux/types/documentType';

const Wrapper = styled.li`
    width: 90%;
    min-height: 30px;
    height: auto;
    display: flex;
    align-items: center;
    background: #383d5c;
    padding: 5px;
    box-sizing: border-box;
    margin-bottom: 5px;
`;

const LayerTitle = styled.span`
  color: #fff;
  font-size: 13px;
  font-weight: 300;
  display: block;
`;

const LayerBox:FC<LayerType> = ({ name }) => {
  return (
    <Wrapper>
      <LayerTitle>{name}</LayerTitle>
    </Wrapper>
  );
};

export default LayerBox;
