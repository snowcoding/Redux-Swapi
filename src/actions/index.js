// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHING = "FETCHING"; 
export const FETCHED = "FETCHED";
export const ERROR = "ERROR"; 


// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

export function swapiFetch(url) {
  return function(dispatch) {
    // we can now place logic here and decide when to call dispatch
    dispatch({ type: FETCHING });

    axios // not sure if the return is needed here
      .get(url)
      .then(({ data }) => {
        dispatch({ type: FETCHED, payload:data.results });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload:err });
      });
  };
}