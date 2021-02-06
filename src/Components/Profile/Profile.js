import React from "react";
import Context from "../../Context";
import "./Profile.css";

export default class Feed extends React.Component {
  static contextType = Context;
  render() {
    const posts = this.context.posts;
    return (
      <div className="posts">
        <h1>Welcome</h1>
        <div className="posts-container">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
