import { configureStore } from '@reduxjs/toolkit';
import documentSlice from '../features/documents/documentsSlice';

export const store = configureStore({
  reducer: {
    documents: documentSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
