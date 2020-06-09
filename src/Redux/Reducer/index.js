import { combineReducers } from 'redux';
import { AuthReducer } from './AuthReducer';

export const reducer = combineReducers({
    Auth: AuthReducer
});