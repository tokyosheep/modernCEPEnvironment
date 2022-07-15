import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { DocumentType } from '../../types/documentType';

interface DocumentsSlice {
    value: DocumentType[]
};

const initialState:DocumentsSlice = {
  value: []
};

const documentSlice = createSlice({
  name: 'documents',
  initialState,
  reducers: {
    setDocs: (state, action: PayloadAction<DocumentType[]>) => {
      state.value = [...action.payload];
    }
  }
});

export const { setDocs } = documentSlice.actions;

export const documents = (state:RootState) => state.documents;

export default documentSlice.reducer;
