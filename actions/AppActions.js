import * as types from './types';
import {AsyncStorage} from 'react-native';

export const doNothing = () => {
  return {type: types.DO_NOTHING, payload: null};
};

export const addMovie = movie => {
  return async dispatch => {
    let watchList = await AsyncStorage.getItem('movies');

    watchList = JSON.parse(watchList);

    if (watchList !== null) {
      watchList.push(movie);
    } else {
      watchList = [movie];
    }

    await AsyncStorage.setItem('movies', JSON.stringify(watchList));
    dispatch({type: types.SET_WATCHLIST, payload: watchList});
  };
};

export const setMovies = movies => {
  return {type: types.SET_WATCHLIST, payload: movies};
};
