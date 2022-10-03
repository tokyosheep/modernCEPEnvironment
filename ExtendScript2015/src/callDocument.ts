import { ReturnSuccess, ReturnError } from './main';

export type CallDocumentReturn = ReturnSuccess<string, 'callDocument'>
export const callDocument:()=>CallDocumentReturn|ReturnError = () => {
    try {
      if(app.documents.length < 1){
          alert("there's no any document");
          throw new Error("there's no any document").toString();
      }
      alert(app.activeDocument.name);
      return {
          status: 'success',
          param: decodeURI(app.activeDocument.name.toString()),
          from: 'callDocument'
      };
    } catch (e) {
        return {
          status: 'failed',
          msg: e.message
        }
    }
}