import React from "react";
import LinkActions from "../actions/LinkActions";

class Link extends React.Component {
  toggleUnlike(e) {
    e.preventDefault();
    LinkActions.saveBookmarkInfo(this.props.link);
    this.setState({ like: !this.state.like });
  }
  constructor(props) {
    super(props);
    this.state = { like: false };
  }
  render() {
    let {title, url, safe, like} = this.props.link;
    return (
      <div className="link">
        <a href={url}
           style={{ color: (safe ? 'green' : 'black') } }>
           {title}</a>
        <i className="fa fa-heart-o" onClick={this.toggleUnlike.bind(this)}
            style={ { color: (this.state.like ? 'red' : 'black')} }>
        </i>
      </div>
    );
  }
}

export default Link;