import styled from 'styled-components';

/**
 * base layout object which defines gridlayout
*/
export const MainContainer = {
  Container: styled.div`
    width: 100%;
    height: 100vh;
    background: #1F2643;
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
    overflow-y: scroll;
  `,
  Footer: styled.footer`
    grid-area: footer;
    background: #414d8d;
  `
};
