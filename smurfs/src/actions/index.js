import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURFS = "ADD_SMURFS";


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

export const getSmurfs = () => dispatch => {
  
  console.log(dispatch);
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: GET_SMURFS, payload: res.data })
    })
    
};



export const addSmurf = smurfName => {
  console.log(smurfName);
  return {
    type: ADD_SMURFS,
    payload: smurfName
  };
};