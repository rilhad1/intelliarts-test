import { combineReducers } from 'redux'
import list from './list.js';
import bool from './bool.js';

export default combineReducers({
    list: list, 
    bool: bool,
});