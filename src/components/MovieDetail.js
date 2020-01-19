import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default class MovieDetail extends Component {
  createStars = () => {
    let stars = [];
    for (let i = 0; i < parseInt(this.props.movie.vote_average); i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
    }
    return stars;
  };
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-center">
              {this.props.movie.original_title}
            </h3>
            <div className="card-text">{this.props.movie.overview}</div>
            <div className="card-text">
              {this.props.movie.genres.map(genre => {
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
                  {this.props.movie.production_companies.map(company => {
                    if (company.logo_path) {
                      const imgPath =
                        "https://image.tmdb.org/t/p/w45/" + company.logo_path;
                      return (
                        <img key={company.id} className="mr-2" src={imgPath} />
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
                    {this.props.movie.vote_average} average based on{" "}
                    {this.props.movie.vote_count} ratings.
                  </div>
                </div>
              </div>
            </div>
            <div className="card-text">
              <div className="propertys d-flex justify-content-between">
                <div className="property-group">
                  <div className="property-title">Release Date: </div>
                  <div className="property">
                    {this.props.movie.release_date}
                  </div>
                </div>
                <div className="property-group">
                  <div className="property-title">popularity: </div>
                  <div className="property">{this.props.movie.popularity}</div>
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
    );
  }
}
