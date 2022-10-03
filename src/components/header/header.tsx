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
            try {
              const connect = new SendHostScript();
              const n = await connect.callHostScript({ func: 'error' });
              console.log(n);// it never happens
            } catch (e) {
              await alertFromJSX(e);
            }
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
            try {
              const connect = new SendHostScript();
              const n = await connect.callHostScript({ func: 'callDocument' });
              console.log(n);
            } catch (e) {
              console.error(e);
            }
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
            try {
              const connect = new SendHostScript();
              const n = await connect.callHostScript({ func: 'greeting', msg: 'hello from CEP' });
              console.log(n);
            } catch (e) {
              await alertFromJSX(e);
            }
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
          try {
            const docs = await connect.callHostScript({ func: 'getDocuments' });
            console.log(docs);
            /*
              send to redux
            */
            if (docs.from === 'getDocuments')dispatch(setDocs(docs.param));
          } catch (e) {
            await alertFromJSX(e);
          }
        }} />
      </Wrapper>
    </Header>
  );
};

export default HeaderCompo;
