import { combineRducers } from 'redux';
import appRducer from './appReducer';

const rootReducer = combineRducers({
  app: appRducer
});

export default rootReducer;
