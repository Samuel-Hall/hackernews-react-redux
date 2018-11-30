import React from "react";
import connect from "react-redux/lib/connect/connect";

function Input(props) {
  return (
    <div>
      <form>
        <label htmlFor="searchQuery">Search Hacker News: </label>
        <input
          name="searchQuery"
          placeholder="Type something"
          value={props.searchQuery}
          onChange={props.inputChanged}
        />{" "}
        <button
          type="submit"
          onClick={event => {
            event.preventDefault();
            props.handleClick(props.searchQuery);
          }}
        >
          Search
        </button>
      </form>
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
    //   Save user input search query to state
    inputChanged: event => {
      const action = { type: "GET_STORIES", searchQuery: event.target.value };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
