import React from "react";
import Context from "../../Context";
import "./Notifications.css";

export default class Notifications extends React.Component {
  static contextType = Context;
  render() {
    const posts = this.context.posts;
    return (
      <div className="likes">
        <h1>Notifications</h1>
        <div className="likes-container">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <p>{post.likes_user_id}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
