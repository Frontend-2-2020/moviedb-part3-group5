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

  createStars = () => {
    let stars = [];
    for (let i = 0; i < parseInt(this.state.movieDetail.vote_average); i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
    }
    return stars;
  };

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
                <div className="card-text">{movieDetail.overview}</div>
                <div className="card-text">
                  {movieDetail.genres.map(genre => {
                    return (
                      <span
                        key={genre.id}
                        className="badge badge-primary mr-2 mt-1 p-2"
                      >
                        {genre.name}
                      </span>
                    );
                  })}
                </div>
                <div>
                  <div className="d-flex justify-content-between">
                    <div>
                      {movieDetail.production_companies.map(company => {
                        if (company.logo_path) {
                          const imgPath =
                            "https://image.tmdb.org/t/p/w45/" +
                            company.logo_path;
                          return (
                            <img
                              key={company.id}
                              className="mr-2"
                              src={imgPath}
                            />
                          );
                        }
                      })}
                    </div>
                    <div className="userrating d-flex flex-column">
                      <div className="icon">
                        {this.createStars()}
                        {/* <FontAwesomeIcon icon={faStar} /> */}
                      </div>
                      <div>
                        {movieDetail.vote_average} average based on{" "}
                        {movieDetail.vote_count} ratings.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-text">
                  <div className="propertys d-flex justify-content-between">
                    <div className="property-group">
                      <div className="property-title">Release Date: </div>
                      <div className="property">{movieDetail.release_date}</div>
                    </div>
                    <div className="property-group">
                      <div className="property-title">popularity: </div>
                      <div className="property">{movieDetail.popularity}</div>
                    </div>
                  </div>
                </div>
                <div className="homebutton">
                  <a className="btn btn-info" href="/">
                    Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
