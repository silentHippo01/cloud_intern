import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../app/StoreProvider/config/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
