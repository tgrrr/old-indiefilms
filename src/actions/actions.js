// import axios from 'axios';
// import fetch from 'node-fetch';
import { createAction } from 'redux-actions';

export const FETCH_VIDEO = 'FETCH_VIDEO';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';

// writing test action
export const TESTACTION = 'TESTACTION';
export const TESTACTION_FIRED = 'TESTACTION_FIRED';
export const testAction = createAction(TESTACTION);

export function receiveVideo (data) {
  return { type: RECEIVE_VIDEO, Video: data };
}

export function fetchVideo (video) {
  return {
    type: FETCH_VIDEO,
    video
  };

  // return (dispatch) => {
  //   dispatch({ type: 'text', data: 'foo' });
  // };

  // return (dispatch) => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response =>
  //       response.json().then(data => ({
  //         data,
  //         status: response.status
  //       })))
  //     .then((response) => {
  //       if (response.status === 200) {
  //         dispatch(receiveVideo(response.data));
  //       } else {
  //         const flash = {
  //           type: 'error',
  //           title: 'Error getting task list',
  //           content: 'There was an error getting the task list. Please try again.'
  //         };
  //         dispatch({ type: 'DISPLAY_FLASH', data: flash });
  //       }
  //     });
  // };
}

// export function receiveVideo (json) {
//   return {
//     type: RECEIVE_VIDEO,
//     video: json.video
//   };
// }
//
// export function fetchVideo (value) {
//   const request = 'foo';
//   // const request = axios.get('http://tgrrr.com');
//   return function (dispatch) {
//     dispatch({
//       type: FETCH_VIDEO,
//       payload: request
//     });
//     // .then(response => response.json())
//     // .then(json => dispatch(receiveVideo(json)));
//   };
// }

// export function fetchVideo () {
//   return dispatch => fetch(url(), {
//     method: 'GET',
//     mode: 'cors',
//     credentials: 'include',
//     headers: {
//       'x-api-key': apiKey,
//       Accept: 'application/json'
//     }
//   })
//     .then(response => response.json())
//     .then(json => dispatch(receiveVideo(json)));
// }
