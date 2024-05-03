import { RootState } from '@/store/rootReducer/rootReducer';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default useAppSelector;
