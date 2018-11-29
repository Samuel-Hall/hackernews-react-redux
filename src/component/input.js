import React from "react";
import connect from "react-redux/lib/connect/connect";

function Input(props) {
  return (
    <div>
      <input
        name="searchQuery"
        value={props.searchQuery}
        onChange={props.inputChanged}
      />
      <p>{props.searchQuery}</p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    searchQuery: state.searchQuery
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inputChanged: event => {
      console.log("Input", event.target.value);
      const action = { type: "GET_STORIES", searchQuery: event.target.value };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
