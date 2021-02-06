import React, { Component } from "react";
import Context from "../../Context";
import "./Gratitude.css";

class Gratitude extends Component {
  static contextType = Context;

  render() {
    return (
      <div className="gratitudeBox">
        <h2>Did you practice gratitude today?</h2>
        <form onSubmit={(e) => this.context.handleSubmit(e)}>
          <div className="gratitude">
            <input
              type="text"
              value={this.context.newPost}
              name="post"
              id="post"
              placeholder="What are you grateful for today?"
              onChange={(e) => this.context.setNewPost(e)}
            />
            <div className="gratitude__buttons">
              <button className="submit" type="submit">
                Breathe
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Gratitude;
