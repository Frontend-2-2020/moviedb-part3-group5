import React, { Component } from "react";
import { URL_detail, API_key } from "../config/parameters";
import axios from "axios";
import "./detail.css";
import MovieDetail from "../components/MovieDetail";
import Jumbotron from "../components/Jumbotron";

export default class Detail extends Component {
  state = { movieDetail: { genres: [], production_companies: [] } };
  componentDidMount() {
    const movieId = this.props.match.params.id;
    // const movieId = 1;
    axios.get(URL_detail + movieId + "?api_key=" + API_key).then(res => {
      this.setState({ movieDetail: res.data });
      this.setState({
        backdrop: "https://image.tmdb.org/t/p/w1280/" + res.data.backdrop_path,
        poster: "https://image.tmdb.org/t/p/w300" + res.data.poster_path
      });
    });
  }

  render() {
    const { movieDetail } = this.state;
    return (
      <div className="container">
        <Jumbotron movie={movieDetail} backdrop={this.state.backdrop} />
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <img src={this.state.poster} alt="" style={{ width: "100%" }} />
          </div>
          <div className="col-md-9 col-sm-12">
            <MovieDetail movie={movieDetail} />
          </div>
        </div>
      </div>
    );
  }
}
