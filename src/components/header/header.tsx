import React from 'react';
import styled from 'styled-components';

import { setDocs } from '../../redux/features/documents/documentsSlice';
import { SendHostScript } from '../../fileSystem/connect';
import { StdButton } from '../../parts/buttons';
import { MainContainer } from '../../styles/container';
import { useAppDispatch } from '../../redux/app/hooks';
import { alertFromJSX } from '../../fileSystem/init';
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
  const dispatch = useAppDispatch();
  return (
    <Header>
      <Wrapper>
        <Title>documents</Title>
        <StdButton name='error' func={
          async () => {
            /**
             * just receive the Error, I wanted to try.
             * that all
             */
            const connect = new SendHostScript();
            const n = await connect.callHostScript({ func: 'error' });
            console.log(JSON.stringify(n));// this is pointless
          }
        }
        />
        <StdButton name='call doc' func={
          /**
           * call document name
           * if there's no any document on hostAppliction,
           * it returns error
           */
          async () => {
            const connect = new SendHostScript();
            const n = await connect.callHostScript({ func: 'callDocument' });
            console.log(n);
          }
        }
        />
        <StdButton name='greet' func={
          /**
          * example of call ExtendScript from hostScript
          * and send message
          * result is just calling message on ExtendScript that all.
          */
          async () => {
            const connect = new SendHostScript();
            const n = await connect.callHostScript({ func: 'greeting', msg: 'hello from CEP' });
            console.log(n);
          }
        } />
        <StdButton name='load' func={
        /**
         * loading documents annd layers data from ExtendScript.
         * and showing on panel
         * @returns {DocumentType[]}
         */
        async () => {
          const connect = new SendHostScript();
          const n = await connect.callHostScript({ func: 'getDocuments' });
          if (n === 'null') {
            await alertFromJSX('error');
            return;
          }
          const docs = JSON.parse(n);
          console.log(docs);
          // send to redux
          dispatch(setDocs(docs));
        }} />
      </Wrapper>
    </Header>
  );
};

export default HeaderCompo;
