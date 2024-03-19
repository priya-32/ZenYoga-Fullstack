// store.js
import { createStore } from 'redux';
import rootReducer from './reducer/rootReducer';
// import rootReducer from './reducer';

const store = createStore(rootReducer); // rootReducer is a combination of all your reducers

export default store;
