import React, { Component } from "react";

class Content extends Component {
    render() {
        console.log("Content render");
        return (
            <article>
                <h2>{this.props.tt}</h2>
                {this.props.hh}
            </article>
        );
    }
}

export default Content;