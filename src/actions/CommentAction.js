import { URL } from '../constants'
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const receivedComment = json => ({
  type: RECEIVE_COMMENT,
  json: json,
});

export function fetchComment() {
  return function (dispatch) {
    return fetch(URL)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error),
      )
      .then((json) => {
        dispatch(receivedComment(json));
      },
      );
  };
}
