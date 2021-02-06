import React, { Component } from "react";
import "./LikeButton.css";

class LikeButton extends Component {
  state = {
    likes: 0,
  };

  addLike = () => {
    const newCount = this.state.likes + 1;
    this.setState({
      likes: newCount,
    });
  };

  render() {
    return <button onClick={this.addLike}>Likes: {this.state.likes} </button>;
  }
}
