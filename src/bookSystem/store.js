import {createStore} from 'redux';
import {reducer} from './systemReducer/reducer'
export const store = createStore(reducer);