import React from "react";

class Link extends React.Component {
  render() {
    let {title, url} = this.props.link;
    //let title = this.props.link.title;
    //let url = this.props.link.url;

    return (
      <div className="link">
        <a href={url}>{title}</a>
      </div>
    );
  }
}

export default Link;