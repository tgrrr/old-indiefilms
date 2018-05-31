import { combineReducers } from 'redux';
import video from './videoReducer';

export const LOG_IN = 'log_in';

const rootReducer = combineReducers({
  video
});

export default rootReducer;
