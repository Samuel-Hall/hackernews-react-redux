import React from "react";

class Box extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="box">
          <h3>Title: {this.props.stories[0].title}</h3>
          <h4>Author: {this.props.stories[0].author}</h4>
          <h5>URL: {this.props.stories[0].url}</h5>
          <button
            onClick={() => {
              this.props.handleClick();
            }}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default Box;
