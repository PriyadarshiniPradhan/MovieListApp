import React, { Component } from 'react';
import MovieContainer from './MovieContainer'
import GenreMovie from './GenreMovieContainer'
import $ from "jquery";
import {connect} from 'react-redux'
import {mostPopular, topRated, top5Movies} from '../actions/MovieActions'


class Movies extends Component{

    componentDidMount(){
      //set upcoming movies as a default
      this.props.mostPopular()
    }

    setFetchMovies(){
      sessionStorage.setItem('Page', 'movie');
      return false;
      }
    
    componentDidUpdate(){
      this.setActive()
    }
    
    setActive = () => {
            $('.list li').click(function () {
              $('.list .active').removeClass('active');
              $(this).addClass('active');
            }) 
      }

    render(){
        return(
            <div>
                
                    <GenreMovie 
                        mostPopular={this.props.mostPopular}
                        topRated={this.props.topRated}
                        top5Movies={this.props.top5Movies}
                        setActive={this.setActive}
                    />
                <MovieContainer movies={this.props.movies} setPage={this.setFetchMovies}/>
            </div>
        )
    }
}


const mapStateToProps = state => ({
  movies: state.movies.searchedMovies,
})

export default connect(mapStateToProps, {mostPopular, topRated, top5Movies})(Movies)