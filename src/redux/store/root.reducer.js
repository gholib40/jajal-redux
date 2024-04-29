import { combineReducers } from "redux";
import { counterReducer } from "./counter-reducer";

export const rootReducers = combineReducers({
    counter : counterReducer
})