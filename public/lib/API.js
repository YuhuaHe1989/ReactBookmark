import {get, post} from "jquery";

import ServerActions from "./actions/ServerActions";

let API = {
  fetchAllBookmarks() {
    console.log("2. In the API.fetchAllBookmarks()")
    get("/api/links").done(data => ServerActions.receiveLinks(data.links));
  },
  saveBookmark(newBookmark) {
    post("/api/links", newBookmark)
      .done(data => ServerActions.receiveOneLink(data));
  },
  deleteBookmark(bookmark) {
    post("/api/deletelink", bookmark)
      .done(data => ServerActions.receiveLinks(data.links));
  },
  saveBookmarkInfo(bookmark) {
    post("/api/savebookmarkinfo", bookmark)
      .done(data => console.log('bookmark',data));
  }
};

export default API;