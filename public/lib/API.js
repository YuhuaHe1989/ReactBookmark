import {get, post} from "jquery";

let API = {
  saveBookmark(newBookmark) {
    return post("/api/links", newBookmark);
  },
  getAllBookmarks(newBookmark) {
    return get("/api/links");
  }
};

export default API;