import React from "react";
import $ from "jquery";
import List from "./List";


class AppController extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bookmarks: [] };
    // We don't have DOM
    // Fetch the data ...
  }
  componentDidMount() {
    console.log('did mount');
    $.get("/api/links")
      .success(data => {
        this.setState({ bookmarks: data.links});
      });
  }
  componentWillMount() {
    console.log('will mount');
  }
  componentWillUpdate() {
    console.log('will update');
  }
  render() {
    console.log('render');
    return (
      <div className="app">
        <h2>Bookmarks!</h2>
        <List bookmarks={this.state.bookmarks} />
      </div>
    );
  }
}

export default AppController;






