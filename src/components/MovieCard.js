import React, { Component } from 'react'
import { Link } from "react-router-dom";
import noImage from '../assets/img/no-image.png';

export default class MovieCard extends Component {

    render() {

        const { movie } = this.props;
        return (

        <div className="col-lg-3 col-md-6 mt-4">
                <div className="card" >
                    <img src={ movie.poster_path != null ?  'https://image.tmdb.org/t/p/w500/' + movie.poster_path : noImage } className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <p className="card-text score">Score: {movie.vote_average}</p>
                            <p className="card-text score">Release Date: {movie.release_date}</p>
                            <Link to={"/movie/" + movie.id} className="btn btn-primary">Details</Link>
                        </div>
                </div>
            </div>
        )
    }
}
