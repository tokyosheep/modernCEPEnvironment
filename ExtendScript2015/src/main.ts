import 'extendscript-es5-shim';
import '../polyfill/json2';
import '../polyfill/padStart';// padstart polyfill
import '../polyfill/trunc';// Math.trunc
import { inspectPolyfill, InspectPolyfillReturn } from './inspectPolyfill';
import getDocumentData, { GetDocumentDataReturn } from './getDocuments';
import { callDocument, CallDocumentReturn } from './callDocument';
import report from './log';

type GreedArg = {
  func: 'greeting',
  msg: string
};

type GetDocumentData = {
  func: 'getDocuments',
};

type CallDocumentArg = {
  func: 'callDocument'
};

type ErrorFunc = {
  func: 'error'
};

type InspectObj = {
  func: 'inspectPolyfill'
}

type FuncKeys = GreedArg['func']|GetDocumentData['func']|CallDocumentArg['func']|InspectObj['func'];


/**
 * Error type
 * any Error returns this type of object
 */
export type ReturnError = {
  status: 'failed',//this is declaration that result was failed
  msg: string
};

/**
 * any function must return this type of Object
 */
export type ReturnSuccess<T, R extends FuncKeys> = {
  status:'success',//this is declaration that result was sucess
  param: T,// value you want to send to panel side
  from:R // the value clarifies where the Object comes from
};

/*
failed and sucess both of case returns status property
to clarify the result of commitment of ExtendScript
*/

type GreetingReturn = ReturnSuccess<null, 'greeting'>;
const greeting:(msg:string)=>GreetingReturn = (msg) => {
  report.log('greeting');
  alert(msg + "こんにちは");
  return {
    status: 'success',
    param: null,
    from: 'greeting'
  }
};

/**
 * type of value from each function
 */
export type ReturnedSuccessType = GreetingReturn|
GetDocumentDataReturn|
CallDocumentReturn|
InspectPolyfillReturn;

export type ReturnFromJSX = ReturnedSuccessType | ReturnError;

export type HostScriptArg = GreedArg|GetDocumentData|CallDocumentArg|ErrorFunc|InspectObj;
export type HostScriptFunc = (arg:HostScriptArg)=>ReturnFromJSX;

/**
 * this is function on top level scope.
 * any function must not be declared on global scope.
 * @param {HostScriptArg} arg 
 * @returns {ReturnFromJSX} 
 * branch to each local function.
 * 
 * I warn you
 * any value will be string type on CEP Panel which comes from ExtendScript.
 */

const switchFuncs:HostScriptFunc = arg => {
  report.log(arg.func);
  switch(arg.func){
    case 'greeting':
      return greeting(arg.msg);

    case 'getDocuments':
      return getDocumentData();

    case 'callDocument':
      return callDocument();

    case 'inspectPolyfill':
      return inspectPolyfill();

    case 'error':
      throw new Error('error');// this just returns Error Object

    default:
      throw new Error('invalid param');
  }
};

/**
 * I just declared this function on global scope as a example of code.
 * but you are not supposed to declare like this funciton on global scope.
 */
const doSomething = (msg) => {
  $.level = 1;
  report.log('doing');
  report.log(msg);
  alert('good day');
};

const test = () => {
  const n = '5';
  report.log(100);
  report.log(n.padStart(2, '0'));
  report.log(Math.trunc(13.2343));
}

/*
declared in global scope
because it must be called from CEP panel.
except functions below, webpack covers any variable, function, object under local scope.
*/
$.global.doSomething = doSomething;
$.global.switchFuncs = switchFuncs;
$.global.test = test;
