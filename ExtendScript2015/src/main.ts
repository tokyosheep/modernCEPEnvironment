import 'extendscript-es5-shim';
import '../json2';
import getDocumentData from './getDocuments';
import report from './log';

report.log('hello');

const greeting:(msg:string)=>void = (msg) => {
    $.writeln('greeting');
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

const doSomething = (msg) => {
  $.level = 1;
  $.writeln('doing');
  $.writeln(msg);
  alert('good day');
}

$.global.doSomething = doSomething;
$.global.switchFuncs = switchFuncs;
