
import {FETCH_ACTORS_PENDING, FETCH_ACTORS_SUCCESS, FETCH_ACTORS_ERROR,
    FETCH_TOPACTORS_PENDING, FETCH_TOPACTORS_SUCCESS, FETCH_TOPACTORS_ERROR,
    SEARCH_PENDING, SEARCH_SUCCESS, SEARCH_ERROR} from '../actions/index'
  
  //Initial state for fetching persons
  const initialState = {
      pending:false,
      actors:[],
      error:null
    }       

    //initial state for search
    const initialStateSearch = {
      pending:false,
      
      values:{ 
          rating:'',
          firstName: '',
          lastName: '',
          year: '',
          Sorting: '',
          SortDirection:'',
        },
      error:null
      
      }
  
    const initialStateTop= {
      pending:false,
      topactors:[],
      error:null
      }
  
  //reducer for persons fetched from api
    export function actorsReducer(state = initialState, action) {
      switch(action.type) {
          case FETCH_ACTORS_PENDING: 
              return {
                  ...state,
                  pending: true
              }
          case FETCH_ACTORS_SUCCESS:
              return {
                  ...state,
                  pending: false,
                  actors: action.payload
              }
          case FETCH_ACTORS_ERROR:
              return {
                  ...state,
                  pending: false,
                  error: action.error
              }
          default: 
              return state;
      }
  }
  

  
   //reducer for search 
  export function searchReducer(state = initialStateSearch, action) {
    switch(action.type) {
        case SEARCH_PENDING: 
            return {
                ...state,
                pending: true
            }
        case SEARCH_SUCCESS:
            return {
                ...state,
                pending: false,
                values: action.payload
            }
        case SEARCH_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
       
        default: 
            return state;
    }
  }
  
  
  export const getActors = state => state.actors;
  export const getActorsPending = state => state.pending;
  export const getActorsError = state => state.error;
  
  
  
  export const getSearch = state => state.values;
  export const getSearchPending = state => state.pending;
  export const getSearchError = state => state.error;
  
  export default actorsReducer & searchReducer;
  
  