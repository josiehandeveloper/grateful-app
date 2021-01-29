import React, { Component } from "react";
import "./Mindfulness.css";

class Mindfulness extends Component {
  render() {
    return (
      <div className="mindfulness">
        <h2>Did you practice Gratitude today?</h2>
        <h3>Take 3 Deep Breathes before you complete this Journal</h3>
        <form className="mindful__form">
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" id="title" placeholder="Title" />
          <label htmlFor="present">
            How are you feeling at this very moment?
          </label>
          <textarea name="present" id="present" placeholder="description" />
          <div className="mindful__buttons">
            <button>Cancel</button>
            <button type="submit">Breathe</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Mindfulness;
