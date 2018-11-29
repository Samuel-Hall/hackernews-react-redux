import React from "react";
import Input from "./input";

class Box extends React.Component {
  render() {
    var storiesList = this.props.stories.map(function(story, index) {
      return (
        <div key={index}>
          <h3>Title: {story.title}</h3>
          <h4>Author: {story.author}</h4>
          <h4>URL: {story.url}</h4>
          <p>---------------------------------</p>
        </div>
      );
    });
    return (
      <div className="wrapper">
        <div className="box">
          {/* <form> */}
          <label htmlFor="searchQuery">Search Hacker News:</label>
          <Input />
          <button
            type="submit"
            onClick={() => {
              this.props.handleClick(this.props.searchQuery);
            }}
          >
            Search
          </button>
          {/* </form> */}
          <div className="storyList">{storiesList}</div>
        </div>
      </div>
    );
  }
}

export default Box;
