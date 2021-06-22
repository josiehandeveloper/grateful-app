import React from "react";
import Context from "../../Context";
import "./Feed.css";
import TokenService from "../../services/token-service";

export default class Feed extends React.Component {
  static contextType = Context;
  componentDidMount() {
    if (TokenService.hasAuthToken()) {
    }
  }
  render() {
    const { feed = [] } = this.context || [];

    return (
      <div className="gratitude_feed">
        <div className="posts-container">
          {feed.map((post, key) => (
            <div className="post" key={post.id}>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
