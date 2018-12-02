import { RECEIVE_COMMENT } from '../actions';

const CommentReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_COMMENT:
      return { ...state, json: action.json };
    default:
      return state;
  }
};

export default CommentReducer;