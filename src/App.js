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
					<header className="main-footer">
        				<h4>Technical Assessment on Movie List App using React JS</h4>
      				</header>
					<Route exact path="/" render={() => (
				  		<Movies />
			  		)} />
					<Route path="/MovieInfo" render={() => (
        				<MovieInfo/>
         			)}/>
      			</div>
      			</Provider>
    		);
		}
}

export default App;