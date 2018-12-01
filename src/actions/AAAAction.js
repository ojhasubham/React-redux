import { AAAURL } from '../constants'
export const GET_USERS = 'GET_USERS';

export const getUsers = json => ({
  type: GET_USERS,
  json: json,
});

export function fetchUsers() {
  return function (dispatch) {
    return fetch(AAAURL,{
      method: 'post',
      body: JSON.stringify({"type":"FUNCTION","functionCategory":"Manage","subcategory":"Users","method":"getUsers"}),
      headers:{'Content-Type': 'application/json'}
    })
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error),
      )
      .then((json) => {
        dispatch(getUsers(json));
      },
      );
  };
}
