import 'extendscript-es5-shim';
import '../json2';
import report from './log';

report.log('hello');

const greeding:(msg:string)=>void = (msg) => {
    alert(msg);
};

type GreedArg = {
  func: 'greeding',
  msg: string
}

export type HostScriptArg = GreedArg;

const switchFuncs:(arg:HostScriptArg)=>boolean = arg => {
  switch(arg.func){
    case 'greeding':
      greeding(arg.msg);
      return true;

    default:
      return false;
  }
};

$.global.switchFuncs = switchFuncs;
