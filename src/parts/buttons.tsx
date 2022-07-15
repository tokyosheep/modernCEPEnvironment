import React, { FC } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  name: string,
  func: () => void
};

const StdButtonStyle = styled.button`
    border: none;
    background:#80a2fd;
    color: #fff;
    font-size: 12px;
    cursor: pointer;
    &:active{
      background: #5983f6;
    }
`;

export const StdButton:FC<ButtonProps> = ({ name, func }) => {
  return (
    <StdButtonStyle onClick={func}>{name}</StdButtonStyle>
  );
};
