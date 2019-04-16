import axios from 'axios';
export const GET_SMURFS = 'GET_SMURFS';
export const ADD_SMURFS = 'ADD_SMURFS';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';




export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS });
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({ type: SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FAILURE, payload: error });
    })
}

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURFS });
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      dispatch({ type: SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({type: FAILURE, payload: error});
    })
}



/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/




/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

