import React from "react";
import Context from "../../Context";
import "./Likes.css";

export default class Likes extends React.Component {
  static contextType = Context;
  render() {
    const { post, like } = this.context;
    console.log("test");
    return (
      <div className="likes">
        <div className="likes-btn">
          {
            <button onClick={() => this.context.addLike(post.id, like.likes)}>
              <i className="far fa-thumbs-up"></i>
              Likes: {like.likes}
            </button>
          }
        </div>
      </div>
    );
  }
}
