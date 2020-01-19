import React, { Component } from "react";

export default class Jumbotron extends Component {
  render() {
    const jumbotronStyle = {
      //   backgroundImage: "url(" + this.state.backdrop + ")"
      //   backgroundImage:
      //     "url(https://image.tmdb.org/t/p/w1280/" + this.state.moviedetail.backdrop_path + ")"
      //   backgroundColor: "rgba(52, 52, 52, 0.5)",
      backgroundImage: `url(${this.props.backdrop})`,
      backgroundSize: "cover",
      backgroundPosition: "center top",
      position: "relative",
      zIndex: -1,
      height: "20em"
    };
    return (
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
          className={"blockquote " + (this.props.movie.tagline ? "" : "d-none")}
        >
          {" "}
          {this.props.movie.tagline}
        </blockquote>
      </div>
    );
  }
}
