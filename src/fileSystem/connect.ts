import { csInterface } from './init';
import { HostScriptArg, ReturnedSuccessType, ReturnFromJSX } from '../../ExtendScript2015/src/main';

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
    callHostScript:(obj:HostScriptArg)=>Promise<ReturnedSuccessType>
};
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
  * @return {Promise<ReturnFromHost>} just boolean or JSON.
  */
  callHostScript (obj:HostScriptArg):Promise<ReturnedSuccessType> {
    return new Promise((resolve, reject) => {
      csInterface.evalScript(`${this.jsx}(${JSON.stringify(obj)})`, (str:string) => {
        try {
          console.log(str);
          const recieved = JSON.parse(str) as ReturnFromJSX;
          console.log(recieved);
          /*
          in case of error, status always be failed
          in any other case, it will be success
          */
          if (recieved.status === 'failed') throw Error(recieved.msg);
          /*
          TypeScript assumes that the recieved value must be success type
          because in case of failed it throws error
          */
          resolve(recieved);
        } catch (e) {
          reject(e);
        }
      });
    });
  }
};
