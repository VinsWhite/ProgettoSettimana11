import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/reducer';

//creiamo lo store globale e inseriamo il reducer 
const store = createStore(reducer);

export default store;