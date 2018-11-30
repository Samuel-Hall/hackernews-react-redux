import axios from "axios";

export function getStories(searchQuery) {
  return dispatch => {
    return axios
      .get(
        `https://hn.algolia.com/api/v1/search?query=${searchQuery}&tags=story`
      )
      .then(response => {
        let storiesArray = [];
        for (let i = 0; i < 5; i++) {
          let storyObject = {
            title: response.data.hits[i].title,
            author: response.data.hits[i].author,
            url: response.data.hits[i].url
          };
          storiesArray.push(storyObject);
          console.log(`Stories Array[${i}]: ${storiesArray[i]}`);
          if (i === 4) {
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
