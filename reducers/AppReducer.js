const INITIAL_STATE = {
  appReducer: 'appReducer',

  watchList: [],
};

import * as types from '../actions/types';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_WATCHLIST:
      return {...state, watchList: action.payload};
    default:
      return state;
  }
};
