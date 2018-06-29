import {
  EMPLOYEE_FETCH_SUCCESS
} from '../actions/types';

const INIT_STATE = {};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_FETCH_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
