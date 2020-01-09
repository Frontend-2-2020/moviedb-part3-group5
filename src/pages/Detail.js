import React, { Component } from "react";
import { URL_detail, API_key } from "../config/parameters";
import axios from "axios";

export default class Detail extends Component {
  state = {};
  componentDidMount() {
    const movieId = this.props.match.params.id;
    // const movieId = 1;
    axios.get(URL_detail + movieId + "?api_key=" + API_key).then(res => {
      this.setState({ movieDetail: res.data });
      this.setState({
        backdrop: "https://image.tmdb.org/t/p/w1280/" + res.data.backdrop_path
      });
    });
  }

  render() {
    const jumbotronStyle = {
      //   backgroundImage: "url(" + this.state.backdrop + ")"
      //   backgroundImage:
      //     "url(https://image.tmdb.org/t/p/w1280/" + this.state.moviedetail.backdrop_path + ")"
      //   backgroundColor: "rgba(52, 52, 52, 0.5)",
      backgroundImage: `url(${this.state.backdrop})`,
      backgroundSize: "cover",
      position: "relative"
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
              backgroundColor: "rgba(255, 255, 255, 0.5)"
            }}
          />
        </div>
        {/* <img src={this.state.backdrop} alt="" /> */}
      </div>
    );
  }
}
