import React from "react";
import Context from "../../Context";
import "./Profile.css";
import TokenService from "../../services/token-service";
import PostAPIService from "../../services/post-api-service";

export default class Profile extends React.Component {
  static contextType = Context;
  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      PostAPIService.getUserPosts();
    }
  }
  render() {
    const { posts = [] } = this.context || [];

    return (
      <div className="posts">
        <h1>Welcome</h1>
        <div className="posts-container">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <p>{post.content}</p>
              <button
                className="delete_btn"
                onClick={() => this.context.deletePost(post.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
