import React from "react";
import Context from "../../Context";
import "./Feed.css";

export default class Feed extends React.Component {
  static contextType = Context;
  render() {
    const { feed = [] } = this.context || [];
    return (
      <div className="gratitude_feed">
        <div className="posts-container">
          {feed.map((post) => (
            <div className="post" key={post.id}>
              <p>{post.content}</p>

              {
                <button
                  className="like-btn"
                  onClick={() => this.context.addLike(post.id)}
                >
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
