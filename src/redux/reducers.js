import {combineReducers} from "redux";
import types from "./action-types";

function genres(state = [], action) {
    switch (action.type) {
        case types.SET_GENRES: {
            return [...action.payload];
        }
        default:
            return state;
    }
}

function platforms(state = [], action) {
    switch (action.type) {
        case types.SET_PLATFORMS: {
            return [...action.payload];
        }
        default: return state;
    }
}

export default combineReducers({genres, platforms});