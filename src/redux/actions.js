import types from './action-types';
import networkClient from '../network/network-client';

export function setError (error) {
    return { type: types.SET_ERROR, payload: error };
}

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