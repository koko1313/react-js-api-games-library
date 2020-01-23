import types from './action-types';
import networkClient from '../network/network-client';

export function setError (error) {
    return { type: types.SET_ERROR, payload: error };
}

// #######################

export function setGenres (genres) {
    return {type: types.SET_GENRES, payload: genres};
}

export const getGenres = () => async dispatch => {
    try {
        const res = await networkClient.get("genres");
        dispatch(setGenres(res.results));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}));
    }
};

// #######################

export function setPlatforms (platforms) {
    return {type: types.SET_PLATFORMS, payload: platforms};
}

export const getPlatforms = () => async dispatch => {
    try {
        const res = await networkClient.get("platforms");
        dispatch(setPlatforms(res.results));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}));
    }
};

// #######################

export function setGames (games) {
    return {type: types.SET_GAMES, payload: games};
}

export const getGames = (params) => async dispatch => {
    try {
        const res = await networkClient.get("games", params);
        dispatch(setGames(res));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}));
    }
}

// #######################

export function setResultDesign (design) {
    return {type: types.SET_RESULT_DESIGN, payload: design};
}

export const getResultDesign = () => async dispatch => {
    dispatch(setResultDesign());
}

// #######################

export function setSelectedPage (page = 1) {
    return {type: types.SET_SELECTED_PAGE, payload: page};
}

export const getSelectedPage = () => async dispatch => {
    dispatch(setSelectedPage());
}

// #######################

export function setCurrentPage (page) {
    return {type: types.SET_CURRENT_PAGE, payload: page};
}

export const getCurrentPage = () => async dispatch => {
    dispatch(setCurrentPage());
}