/**
* host Script never be reloaded until application restarted. 
* @param {Object} arg receive parameter and send to switchFuncs
*/

function hostScript(arg){
   //declared debug level for ExtendScript debugger
   $.level = 1;
   /*
   any value from ExtendScript become string
   including error
   */
   try {
      return JSON.stringify(switchFuncs(arg));
   } catch (e) {
      return JSON.stringify({
         status: 'failed',
         msg: e.message
      });
   };
}
