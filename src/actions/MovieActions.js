import React, { useState, useEffect } from 'react'
import {FETCH_POPULAR, FETCH_TOP_RATED, FETCH_TOP_5_MOVIES} from './types'
import $ from 'jquery';


const api = 'https://api.themoviedb.org/3'
const apiKey = '3bb3e74e8fc943081e14846f3f2f11f4'


export const mostPopular = () => dispatch => {
    const url = `${api}/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    fetch(url)
    .then(response => response.json())
    .then(movies => dispatch({
        type:FETCH_POPULAR,
        payload: movies.results
    }))
}


export const topRated = () => dispatch => {
    const url = `${api}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    fetch(url)
    .then(response => response.json())
    .then(movies => dispatch({
        type:FETCH_TOP_RATED,
        payload: movies.results
    }))
}

export const top5Movies = () => dispatch => {
    
    const url = `${api}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    fetch(url)
    .then(response => response.json())
    .then(movies => dispatch({
        type:FETCH_TOP_RATED,
        payload: movies.results.slice(0,5)
    }))

}
