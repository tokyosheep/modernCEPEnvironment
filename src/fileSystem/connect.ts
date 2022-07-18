import { csInterface } from './init';
import { HostScriptArg } from '../../ExtendScript2015/src/main';

/**
 * just call dosomething function from ExtendScript
 */
export const dosomething = () => {
  /**
   * @param {string} this is just parameter to send ExtendScript
   */
  const msg = 'good bye';
  csInterface.evalScript(`doSomething("${msg}");`);
}

export interface HostObj{
    jsx:string,
    callHostScript:(obj:HostScriptArg)=>Promise<string|boolean>
};

type Return = string|boolean;

/*
this calss connects to host ExtendScript
*/
export class SendHostScript implements HostObj {
  jsx:'hostScript';
  constructor () {
    this.jsx = 'hostScript';
  }

  /**
  * @param {HostScriptArg} send to ExtendScript as a parameter
  * @return {Promise<string|boolean>} just boolean or JSON.
  */
  callHostScript (obj:HostScriptArg):Promise<string|boolean> {
    return new Promise((resolve) => {
      csInterface.evalScript(`${this.jsx}(${obj !== undefined ? JSON.stringify(obj) : ''})`, (o:Return) => {
        resolve(o);
      });
    });
  }
};
