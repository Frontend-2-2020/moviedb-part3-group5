import React, { Component } from 'react'

export default class Pagination extends Component {
    render() {
        return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><a className="page-link" id="prev" onClick={this.props.click} href="#">Previous</a></li>
                <li className="page-item"><a className="page-link" id="next" onClick={this.props.click} href="#">Next</a></li>
            </ul>
        </nav>
        )
    }
}
