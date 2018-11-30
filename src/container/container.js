import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index.js";
import Box from "../component/box.js";

class Container extends React.Component {
  render() {
    return (
      <Box
        handleClick={this.props.getStories}
        stories={this.props.stories}
        searchQuery={this.props.searchQuery}
      />
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actionCreators
)(Container);
