import { createStore, applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers/index';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
const initialState={}
const middleware = [thunk];

const store = createStore(
    rootReducer,
     initialState, 
     composeWithDevTools(
         applyMiddleware(...middleware)
         )
     
     );

export default store;
