import initialState from './initialState';
import { FETCH_VIDEO, RECEIVE_VIDEO, TESTACTION_FIRED } from '../actions/actions';

export default function video (state = initialState.video, action) {
  let newState;
  switch (action.type) {
    case FETCH_VIDEO:
      console.log('FETCH_VIDEO Action');
      return action;
    case RECEIVE_VIDEO:
      newState = action.video;
      console.log('RECEIVE_VIDEO Action');
      return newState;
    case TESTACTION_FIRED:
      console.log('Test action fired..');
      return { ...initialState };
    default:
      return state;
  }
}
