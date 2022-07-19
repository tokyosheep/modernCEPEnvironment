import 'extendscript-es5-shim';
import '../json2';
import getDocumentData from './getDocuments';
import report from './log';

report.log('hello');

const greeting:(msg:string)=>void = (msg) => {
    report.log('greeting');
    alert(msg);
};

type GreedArg = {
  func: 'greeting',
  msg: string
}

type GetDocumentData = {
  func: 'getDocuments',
}

export type HostScriptArg = GreedArg|GetDocumentData;

/**
 * this is function on top level scope.
 * any function must not be declared on global scope.
 * @param {HostScriptArg} arg 
 * @returns {boolean|string}
 * branch to each local function.
 */
const switchFuncs:(arg:HostScriptArg)=>boolean|string = arg => {
  report.log(arg.func);
  switch(arg.func){
    case 'greeting':
      greeting(arg.msg);
      return true;

    case 'getDocuments':
      return JSON.stringify(getDocumentData());

    default:
      return false;
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
}

/*
declared in global scope
because it must be called from CEP panel.
except functions below, webpack covers any variable, function, object under local scope.
*/
$.global.doSomething = doSomething;
$.global.switchFuncs = switchFuncs;
