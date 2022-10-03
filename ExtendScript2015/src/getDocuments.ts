import { DocumentType } from '../../src/redux/types/documentType';
import { LayerType } from '../../src/redux/types/documentType';
import { ReturnSuccess, ReturnError } from './main';
import report from './log';

/**
 * @param activeDoc 
 * @returns {LayerType[]}
 * getting layers name
 */
const getLayers:(activeDoc:typeof app.activeDocument)=>LayerType[] = activeDoc => {
  const layers:LayerType[] = [];
  for (let l = 0;l < activeDoc.layers.length; l++) {
    layers[l] = {
        type: 'layer',
        name: activeDoc.layers[l].name
    };
  };
  return layers;
};

export type GetDocumentDataReturn = ReturnSuccess<DocumentType[], 'getDocuments'>;
/**
 * getting documents and layers data on Illustrator
 * @returns {ReturnSuccess<DocumentType[], 'getDocuments'>}
 */
const getDocumentData:()=>GetDocumentDataReturn|ReturnError = () => {
  try {
    const docs:DocumentType[] = [];
    const documents = app.documents;
    for (let i = 0;i < documents.length; i++) {
      app.activeDocument = documents[i];
      report.log(app.activeDocument.name);
      docs[i] = {
          type: 'document',
          name: app.activeDocument.name,
          layers: getLayers(app.activeDocument)
      };
    };
    return {
      status: 'success',
      param: docs,
      from: 'getDocuments'
    };
  } catch (e) {
    return {
      status: 'failed',
      msg: e.message
    }
  }
};

export default getDocumentData;
