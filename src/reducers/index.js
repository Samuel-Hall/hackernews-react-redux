let defaultState = {
  stories: [
    { title: "Search Hacker News for stories!", author: "Sam Hall", url: "N/A" }
  ],
  searchQuery: "Search query"
};

const mainReducer = (state = defaultState, action) => {
  if (action.type === "CHANGE_COLOR") {
    return {
      ...state,
      stories: action.stories[0]
    };
  } else {
    return {
      ...state
    };
  }
};

export default mainReducer;
