import { URL } from '../constants'
export const RECEIVE_INCIDENTS = 'RECEIVE_INCIDENTS';

export const receivedIncidents = json => ({
  type: RECEIVE_INCIDENTS,
  json: json,
});

export function fetchIncidents() {
  return function (dispatch) {
    return fetch(URL)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error),
      )
      .then((json) => {
        dispatch(receivedIncidents(json));
      },
      );
  };
}
