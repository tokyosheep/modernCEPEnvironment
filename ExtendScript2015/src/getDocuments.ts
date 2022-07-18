import { DocumentType } from '../../src/redux/types/documentType';
import { LayerType } from '../../src/redux/types/documentType';
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

/**
 * getting documents and layers data on Illustrator
 * @returns {DocumentType[]}
 */
const getDocumentData:()=>DocumentType[] = () => {
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
  return docs;
};

export default getDocumentData;
