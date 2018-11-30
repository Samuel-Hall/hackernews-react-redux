import React from "react";
import Input from "./input";

class Box extends React.Component {
  render() {
    var storiesList = this.props.stories.map(function(story, index) {
      return (
        <div className="story" key={index}>
          <h3>Title: {story.title}</h3>
          <h4>Author: {story.author}</h4>
          <h4>
            URL:{" "}
            <a href={story.url} rel="noreferrer noopener" target="_blank">
              {story.url}
            </a>
          </h4>
        </div>
      );
    });
    return (
      <div className="wrapper">
        <div className="box">
          <Input
            handleClick={this.props.handleClick}
            searchQuery={this.props.searchQuery}
          />
          <div className="storyList">{storiesList}</div>
        </div>
      </div>
    );
  }
}

export default Box;
