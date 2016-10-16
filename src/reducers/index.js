import { combineReducers } from 'redux';
import appRducer from './appReducer';

const rootReducer = combineReducers({
  app: appRducer
});

export default rootReducer;
