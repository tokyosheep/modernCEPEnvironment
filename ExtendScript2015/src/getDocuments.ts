import { DocumentType } from '../../src/redux/types/documentType';
import { LayerType } from '../../src/redux/types/documentType';
import report from './log';

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

const getDocumentData:()=>DocumentType[] = () => {
  const docs:DocumentType[] = [];
  const documents = app.documents;
  for (let i = 0;i < documents.length; i++) {
    app.activeDocument = documents[i];
    docs[i] = {
        type: 'document',
        name: app.activeDocument.name,
        layers: getLayers(app.activeDocument)
    };
  };
  return docs;
};

export default getDocumentData;
