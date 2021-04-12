import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Movies from './component/Movies'
import MovieInfo from './component/MovieInfo'
import {Provider} from 'react-redux'
import store from './store/store'



class App extends Component {  	
		render() {
			return (
				<Provider store={store}>
				<div className="App">
					<Route exact path="/" render={() => (
				  		<Movies />
			  		)} />
					<Route path="/MovieInfo" render={() => (
        				<MovieInfo/>
         			)}/> 
			  		<footer className="main-footer">
        				<h4>Movie App @2021</h4>
      				</footer>
      			</div>
      			</Provider>
    		);
		}
}

export default App;