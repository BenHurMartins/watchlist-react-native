import * as types from './types';

export const doNothing = () => {
  return {type: types.DO_NOTHING, payload: null};
};
