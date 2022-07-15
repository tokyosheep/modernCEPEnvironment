export type LayerType = {
  type: 'layer',
  name: string
};

export type DocumentType = {
  type: 'document'
  name: string,
  layers: LayerType[]
};
