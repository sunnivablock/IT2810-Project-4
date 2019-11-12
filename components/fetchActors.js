import {fetchActorsPending, fetchActorsSuccess, fetchActorsError} from './actions/index'

//fetches celebrities from database based on the input api-url
function fetchActors(url) {
    return dispatch => {
        dispatch(fetchActorsPending());
        fetch(url)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchActorsSuccess(res));
           return res.actors;
        })
        .catch(error => {
            dispatch(fetchActorsError(error));
        })
    }
}

export default fetchActors;