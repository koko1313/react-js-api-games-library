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
        default: return state;
    }
}

function selectedPage(state = 1, action) {
    switch (action.type) {
        case types.SET_SELECTED_PAGE: {
           return action.payload;
        }
        default: return state;
    }
}

function currentPage(state = 0, action) {
    switch (action.type) {
        case types.SET_CURRENT_PAGE: {
           return action.payload;
        }
        default: return state;
    }
}

function selectedGenre(state = 0, action) {
    switch (action.type) {
        case types.SET_SELECTED_GENRE: {
            return action.payload;
         }
         default: return state;
    }
}

function selectedPlatform(state = 0, action) {
    switch (action.type) {
        case types.SET_SELECTED_PLATFORM: {
            return action.payload;
         }
         default: return state;
    }
}

function currentGenre(state = 0, action) {
    switch (action.type) {
        case types.SET_CURRENT_GENRE: {
           return action.payload;
        }
        default: return state;
    }
}

function currentPlatform(state = 0, action) {
    switch (action.type) {
        case types.SET_CURRENT_PLATFORM: {
           return action.payload;
        }
        default: return state;
    }
}

function gameDetails(state = {}, action) {
    switch (action.type) {
        case types.SET_GAME_DETAILS: {
            return {...action.payload};
        }
        default: return state;
    }
}

export default combineReducers({genres, platforms, games, resultDesign, selectedPage, currentPage, selectedGenre, selectedPlatform, currentGenre, currentPlatform, gameDetails});