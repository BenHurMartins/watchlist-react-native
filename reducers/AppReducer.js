const INITIAL_STATE = {
  appReducer: 'appReducer',
};

import * as types from '../actions/types';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
