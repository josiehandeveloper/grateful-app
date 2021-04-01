import React from "react";
import Context from "../../Context";
import "./Likes.css";

export default class Likes extends React.Component {
  static contextType = Context;
  render() {
    const { likes } = this.context;
    return (
      <div className="likes">
        <div className="likes-btn">
          {likes.map((like) => (
            <button onClick={() => this.context.addLike(like.count)}>
              <i className="far fa-thumbs-up"></i>
              Likes: {like.count}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
