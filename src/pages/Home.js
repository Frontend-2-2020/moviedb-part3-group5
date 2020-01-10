import React, { Component } from 'react'
import Axios from 'axios';
import MovieCard from '../components/MovieCard';
import { API_key } from '../config/parameters';
import Pagination from '../components/Pagination';

export default class Home extends Component {

    state = {
        movies: [],
        page: 1
    }

    componentDidMount(){
        this.getMovies();
    }

    getMovies = () => {
        Axios.get('https://api.themoviedb.org/3/movie/popular?'+ "&api_key=" + API_key + "&page=" + this.state.page)
        .then(response => {
            this.setState({
                movies: response.data.results
            })
        });
    };

    paginationClickHandle = (e) => {

        let page = this.state.page;

        if(e.target.id == 'prev'){
            if(page != 1 ){
                page--;
            }
        }else{
            page++
        }

        this.setState({
            page: page
        },() => this.getMovies())
    }

    render() {
        const filteredMovies = this.state.movies.filter(movie => (
            movie != null
        ));

        return (
            <div>
                <div className="container">
                    <Pagination click={this.paginationClickHandle}></Pagination>
                    <div className="row" id="movies">
                        {filteredMovies.map(movie => (
                            <MovieCard movie={movie}
                                       key={movie.id}>
                            </MovieCard>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
