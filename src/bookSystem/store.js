import {createStore} from './node_modules/redux';
import {reducer} from './systemReducer/index'
export const store = createStore(reducer);
console.log(store.getState())