import React from "react";
import Context from "../../Context";
import "./Feed.css";
import PostAPIService from "../../services/post-api-service";
import TokenService from "../../services/token-service";

export default class Feed extends React.Component {
  static contextType = Context;
  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      PostAPIService.getPosts();
    }
  }
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
                  onClick={() => this.context.addLike(post.id, post.likes)}
                >
                  <i className="far fa-thumbs-up"></i>
                  Likes: {post.likes}
                </button>
              }
              {console.log(post.id)}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
