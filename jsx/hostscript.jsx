/**
* host Script never be reloaded until application restarted. 
* @param {Object} arg receive parameter and send to switchFuncs
*/

function hostScript(arg){
   //declared debug level for ExtendScript debugger
   $.level = 1;
   return switchFuncs(arg);
}
