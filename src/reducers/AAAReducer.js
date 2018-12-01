import { GET_USERS } from '../actions';

const AAAReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, json: action.json };
    default:
      return state;
  }
};

export default AAAReducer;