import API from "../API";

let LinkActions = {
  saveBookmark(newBookmark) {
    API.saveBookmark(newBookmark);
  },
  getAllBookmarks() {
    console.log("1. In LinkActions.getAllBookmarks()");
    API.fetchAllBookmarks();
  },
  deleteBookmark(bookmark) {
    API.deleteBookmark(bookmark);
  },
  saveBookmarkInfo(bookmark) {
    API.saveBookmarkInfo(bookmark);
  }
};

export default LinkActions;