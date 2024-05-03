import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer/rootReducer';
import { RootState } from './rootReducer/rootReducer';
import { createWrapper, Context, MakeStore } from 'next-redux-wrapper';

const makeStore: MakeStore<RootState> = (context: Context) =>
  configureStore({
    reducer: rootReducer,
  });

export const wrapper = createWrapper<RootState>(makeStore, { debug: true });

export const store = configureStore({
  reducer: rootReducer,
});
