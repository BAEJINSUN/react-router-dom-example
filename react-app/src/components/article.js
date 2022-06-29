import React, { Component } from "react";

class article extends Component {
    render() {
        return (
            <article>
                <h2>{this.props.tt}</h2>
                {this.props.hh}
            </article>
        );
    }
}

export default article;