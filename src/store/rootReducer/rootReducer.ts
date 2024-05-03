import { combineReducers } from 'redux';
import productSlice from '../slices/productSlice';
import store from '@/store/store';

const rootReducer = combineReducers({
  productSlice: productSlice,
});

export default rootReducer;
export type RootState = ReturnType<typeof store.getState>;
