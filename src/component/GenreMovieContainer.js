import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAngleRight } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

export default class GenreMovie extends Component{

    componentDidMount(){
       this.props.setActive()
    }

    render(){
        return(
    <section className="subheader">
      <div className="genre-container">
        <ul className="list">
            <li className="" onClick={(event) => this.props.mostPopular(event.target.value)}>Movie List</li>
            <li className="" onClick={(event) => this.props.topRated(event.target.value)}>Top Rated Movies</li>
            <li className="" onClick={(event) => this.props.top5Movies(event.target.value)}>Top 5 Movies</li>
        </ul>
      </div>
      
    </section>
        )
    }
}