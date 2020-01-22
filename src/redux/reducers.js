import {combineReducers} from "redux";
import types from "./action-types";
import DESIGNS_ENUM from "../components/GamesList/GameResultDesign/DESIGNS_ENUM";

function genres(state = [], action) {
    switch (action.type) {
        case types.SET_GENRES: {
            return [...action.payload];
        }
        default: return state;
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

function games(state = {}, action) {
    switch (action.type) {
        case types.SET_GAMES: {
            return {...action.payload};
        }
        default: return state;
    }
}

function resultDesign(state = DESIGNS_ENUM.DESIGN_ROWS, action) {
    switch (action.type) {
        case types.SET_RESULT_DESIGN: {
            return action.payload;
        }
        default: return state
    }
}

export default combineReducers({genres, platforms, games, resultDesign});