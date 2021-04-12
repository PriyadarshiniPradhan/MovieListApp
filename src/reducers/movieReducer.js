import {FETCH_POPULAR, FETCH_TOP_RATED, FETCH_TOP_5_MOVIES} from '../actions/types'

const initialState = {
    searchedMovies:[],
}

export default function(state=initialState, action){
    switch(action.type){
        case FETCH_POPULAR:
        return{
            ...state,
            searchedMovies:action.payload
        };
        case FETCH_TOP_RATED:
        return{
            ...state,
            searchedMovies:action.payload
        };
        case FETCH_TOP_5_MOVIES:
        return{
            ...state,
            searchedMovies:action.payload
        };
        default:
        return state;
    }
}