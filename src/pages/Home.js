import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="col-lg-3 col-md-6 mt-4">        
                <div className="card" >
                    <img src="" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Titel</h5>
                            <p className="card-text score">Score: 5</p>
                            <p className="card-text score">Release Date: 19</p>
                            <a href="http://localhost:8081/?movie=${movie.id}" className="btn btn-primary">Details</a>
                        </div>
                </div>
            </div>
        )
    }
}
