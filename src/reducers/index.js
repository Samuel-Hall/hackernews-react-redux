let defaultState = {
  stories: [
    { title: "Search Hacker News for stories!", author: "Sam Hall", url: "N/A" }
  ],
  searchQuery: ""
};

const mainReducer = (state = defaultState, action) => {
  if (action.type === "SET_STORIES") {
    return {
      ...state,
      stories: action.stories[0]
    };
  } else if (action.type === "GET_STORIES") {
    return Object.assign({}, state, { searchQuery: action.searchQuery });
  } else {
    return {
      ...state
    };
  }
};

export default mainReducer;
