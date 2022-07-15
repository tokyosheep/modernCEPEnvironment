import styled from 'styled-components';

export const MainContainer = {
  Container: styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px calc(100% - 80px) 30px;
    grid-template-areas:
    'header'
    'main'
    'footer';
  `,
  Header: styled.header`
    grid-area: header;
  `,
  Main: styled.main`
    grid-area: main;
    overflow: scroll;
  `,
  footer: styled.footer`
    grid-area: footer;
    background: #414d8d;
  `
};
