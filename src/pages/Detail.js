import React, { Component } from "react";
import { URL_detail, API_key } from "../config/parameters";
import axios from "axios";
import "./detail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
    const jumbotronStyle = {
      //   backgroundImage: "url(" + this.state.backdrop + ")"
      //   backgroundImage:
      //     "url(https://image.tmdb.org/t/p/w1280/" + this.state.moviedetail.backdrop_path + ")"
      //   backgroundColor: "rgba(52, 52, 52, 0.5)",
      backgroundImage: `url(${this.state.backdrop})`,
      backgroundSize: "cover",
      backgroundPosition: "center top",
      position: "relative",
      zIndex: -1,
      height: "20em"
    };
    return (
      <div className="container">
        <div style={jumbotronStyle} className="jumbotron">
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              zIndex: -2
            }}
          />
          <blockquote
            className={"blockquote " + (movieDetail.tagline ? "" : "d-none")}
          >
            {" "}
            {movieDetail.tagline}
          </blockquote>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <img src={this.state.poster} alt="" style={{ width: "100%" }} />
          </div>
          <div className="col-md-9 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center">
                  {movieDetail.original_title}
                </h3>
                <p className="card-text">{movieDetail.overview}</p>
                <p className="card-text">
                  {movieDetail.genres.map(genre => {
                    return (
                      <span className="badge badge-primary mr-2 p-2">
                        {genre.name}
                      </span>
                    );
                  })}
                </p>
                <p>
                  <div className="d-flex justify-content-between">
                    <div>
                      {movieDetail.production_companies.map(companie => {
                        if (companie.logo_path) {
                          const imgPath =
                            "https://image.tmdb.org/t/p/w45/" +
                            companie.logo_path;
                          return <img className="mr-2" src={imgPath} />;
                        }
                      })}
                    </div>
                    <span className="icon">
                      {movieDetail.vote_average}
                      <FontAwesomeIcon checked={true} icon={faStar} />
                    </span>
                  </div>
                </p>
                <p className="card-text">
                  Relase Date: {movieDetail.release_date}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <img src={this.state.backdrop} alt="" /> */}
      </div>
    );
  }
}
