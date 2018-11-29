import axios from "axios";

export function getStories() {
  return dispatch => {
    return axios
      .get(`http://hn.algolia.com/api/v1/search?query=react&tags=story`)
      .then(response => {
        let storiesArray = [];
        for (let i = 0; i < 5; i++) {
          let storyObject = {
            title: response.data.hits[i].title,
            author: response.data.hits[i].author,
            url: response.data.hits[i].url
          };
          //   let storyObject = `${response.data.hits[i].title}`;
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
    type: "CHANGE_COLOR",
    stories: [stories]
  };
}
