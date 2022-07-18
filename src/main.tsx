
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import Layout from './pages/layout';

import { store } from './redux/app/store';
import { Provider } from 'react-redux';

/**
 * I developed example of Extension based on React
 * but you don't have to know React.
 * if you want to know how to connect ExtendScript, see intt.js , connect.ts , header.tsx
 */

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        font-family: "Helvetica Neue" , Helvetica , Arial , Verdana , Roboto , "游ゴシック" , "Yu Gothic" , "游ゴシック体" , "YuGothic" , "ヒラギノ角ゴ Pro W3" , "Hiragino Kaku Gothic Pro" , "Meiryo UI" , "メイリオ" , Meiryo , "ＭＳ Ｐゴシック" , "MS PGothic" , sans-serif;
        background: #1F2643;
        overflow: hidden;
    }   
`;
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <GlobalStyle />
    <Layout/>
  </Provider>
);
