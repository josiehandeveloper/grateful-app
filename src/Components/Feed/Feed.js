import React from "react";
import Context from "../../Context";
import "./Feed.css";

export default class Feed extends React.Component {
  static contextType = Context;
  render() {
    const posts = this.context.posts;
    return (
      <div className="posts">
        <div className="posts-container">
          {posts.map((post, i) => (
            <div className="post" key={i}>
              <p>{post.content}</p>
              {
                <button onClick={() => this.context.addLike(post.id)}>
                  <i className="far fa-thumbs-up"></i>
                  Likes: {post.likes}
                </button>
              }
            </div>
          ))}
        </div>
      </div>
    );
  }
}
