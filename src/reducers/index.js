import { combineReducers } from 'redux';
import IncidentReducer from './IncidentReducer';
import AAAReducer from './AAAReducer';

const rootReducer = combineReducers({
  IncidentReducer,
  AAAReducer
})

export default rootReducer;
