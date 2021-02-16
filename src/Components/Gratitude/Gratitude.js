import React, { Component } from "react";
import Context from "../../Context";
import "./Gratitude.css";

class Gratitude extends Component {
  static contextType = Context;

  render() {
    // context exists, new post exists
    // context exists, but newPost doesn't
    // context doesn't exist
    const { newPost = "" } = this.context || "";
    return (
      <div className="gratitude">
        <div className="gratitude_header">
          <h1>Feed</h1>
        </div>
        <div className="gratitude_box">
          <form onSubmit={(e) => this.context.handleSubmit(e)}>
            <div className="gratitude_input">
              <i className="far fa-user-circle"></i>
              <input
                type="text"
                value={newPost}
                name="post"
                id="post"
                placeholder="What are you grateful for today?"
                onChange={(e) => this.context.setNewPost(e)}
              />
            </div>
            <div className="gratitude__buttons">
              <button className="gratitude_btn" type="submit">
                Breathe
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Gratitude;

// <>
//   <div className="gratitudeBox">
//     <h2>Did you practice gratitude today?</h2>
//     <form onSubmit={(e) => this.context.handleSubmit(e)}>
//       <div className="gratitude">
//         <input
//           type="text"
//           value={this.context.newPost}
//           name="post"
//           id="post"
//           placeholder="What are you grateful for today?"
//           onChange={(e) => this.context.setNewPost(e)}
//         />
//         <div className="gratitude__buttons">
//           <button className="submit" type="submit">
//             Breathe
//           </button>
//         </div>
//       </div>
//     </form>
//   </div>
// </>
