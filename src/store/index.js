import { createStore } from 'redux' // 第三方的
import rootReducer from './reducers';

let store = createStore(rootReducer);

export default store;
