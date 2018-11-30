import axios from "axios";

export function getStories(searchQuery) {
  // Query the hacker news algolia api with custom search query and tags = story
  return dispatch => {
    return axios
      .get(
        `https://hn.algolia.com/api/v1/search?query=${searchQuery}&tags=story`
      )
      .then(response => {
        //   Initialize array to hold results
        let storiesArray = [];
        // Loop through first 5 results, create an object for each story containing title, author, and url.
        for (let i = 0; i < 5; i++) {
          let storyObject = {
            title: response.data.hits[i].title,
            author: response.data.hits[i].author,
            url: response.data.hits[i].url
          };
          storiesArray.push(storyObject);
          if (i === 4) {
            //   On the last iteration, dispatch stories array to state.
            dispatch(setStories(storiesArray));
          }
        }
      });
  };
}

export function setStories(stories) {
  return {
    type: "SET_STORIES",
    stories: [stories]
  };
}
