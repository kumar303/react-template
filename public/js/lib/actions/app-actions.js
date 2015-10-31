import * as actionTypes from 'lib/constants/action-types';


export function appError(error) {
  return {
    type: actionTypes.APP_ERROR,
    error: error,
  };
}
