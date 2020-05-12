import {combineReducers} from "redux";
import MuffinReducer from './muffins';

const allReducers = combineReducers({
    muffins: MuffinReducer
});

export default allReducers;