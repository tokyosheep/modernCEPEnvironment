# Example of ExtendScript based on Modern JavaScript

## what is used
**CEP panel**
1. React
2. TypeScript
3. Eslint
4. Webpack
5. Babel

**ExtendScript**
1. Webpack
2. TypeScript
3. Babel

** Note **
for those users who use Japanese character.
Japanese character will be garbled (doesn't work).
so in case, you need webpack-utf8-bom.

## features of Extension

The Extension just takes documents and layers parts of data.
And it shows on panel. it doesn't have any special feature because this is an exmaple of
code.

## The purpose to published the code
The code shows how to develop ExtendScript with modern Javascript.
As you know ExtendScript the system is based on ECMA3 which is obsolete Javascript.
The more you develop , the more you feel inconvenience.
Especially ExtendScript pollutes variable scope easily.
Webpack solves those problems, and TypeScript stabilizes code between 
CEP panel and ExtendScript.

## How this environment is developed
I used npm package Webpack , Babel, Typescript.
Webpack complies ExtendScripts, and Babel transpiles from ES2015 to ES3, and you may know
Typescript paves way on your codes.
ECMA3 needs some polyfill even after Babel transplied Modern Javascript, like
extendscript-es5-shim, json2.

### CEP only can load global scope function

CEP can excute ExtendScript function but only it can excute global scope function.
So It must be declared on global scope but global scope should be prevent from variable pollution.
That why I declared only branch function on global scope that branchs to each function.
like below.

 ` ` ` 
const switchFuncs = () => {
    /* branch to each local function */
}
$.global.switchFuncs = switchFuncs;
 ` ` ` 

But you are not supposed to declare other global variable except it. and Webpack covers local scope any function , variable , object.

### Report.log

in Webpack environment, the variable is declared like this.

 ` ` ` 
plugins: [
   new webpack.DefinePlugin({
       ISDEVELOP: true
   })
]
 ` ` ` 

ISDEVELOP variable has boolean value , under development environment,
it'll be true.
and under production environment, it'll be false.
I use report.log method instead of $.writeln method directly.
it writes console only under development environment because it detects ISDEVELOP environment.

### Init reload event
Illustrator Extension doen't reload code untill you restart application.
After you modify code, you have to reastart it and again and again.
It's obviously wasting time.
So I register window(csinteface) event.

 ` ` `
const reload = () =>{
    csInterface.addEventListener("com.adobe.csxs.events.WindowVisibilityChanged",()=>{location.reload(true)},false);
}
 ` ` `

once you close and open panel, it reloads code. you don't need reastrt application.(but after catching error on CEP panel without try and catch , it won't reload)

### HostScript
host ExtendScript registered on manifest.xml won't be reload even you register reload event.
if you want to reload ExtendScript again with the event, try to load ExtendScriot through csinterface.eval method not as a host script.

 ` ` `
 export const csInterface = new CSInterface();
export const extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) + '/jsx/';
const loadJsx = () =>{
    csInterface.evalScript(`$.evalFile("${extensionRoot}/transpiled.js")`);
};
 ` ` `

 it loads ExtendScript from global scope.(that why I registered branch function on global scope)

### debug level
ExtendScript debugger requires declaration of debug level in ExtendScript.

 ` ` `
$.level = 1;
 ` ` `

### October 3 2022

added polyfills and babels
1. padstart
2. Math.trunc
3. Objectentries

modified type of object from ExtendScript to panel side

### May 16 2023

added webpack-utf8-bom plugin for Japanese character (as I mentioned in this article).