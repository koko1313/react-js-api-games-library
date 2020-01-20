import types from './action-types';
import networkClient from '../network/network-client';

export function setGenres (genres) {
    return {type: types.SET_GENRES, payload: genres}
}

export function setError (error) {
    return { type: types.SET_ERROR, payload: error };
}

export const getGenres = () => async dispatch => {
    try {
        //const res = await networkClient.get("https://api.rawg.io/api/genres");
        const res = await networkClient.get("genres");
        dispatch(setGenres(res.results));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};