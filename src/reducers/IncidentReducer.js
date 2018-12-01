import { RECEIVE_INCIDENTS } from '../actions';

const IncidentReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_INCIDENTS:
      return { ...state, json: action.json };
    default:
      return state;
  }
};

export default IncidentReducer;