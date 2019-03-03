import { combineReducers } from "redux";
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import projectReducer from './projectReducer';
import postsReducer from './postsReducer'
export default combineReducers({
    auth:authReducer,
    errors:errorReducer,
    profile:profileReducer,
    project:projectReducer,
    post:postsReducer
});

