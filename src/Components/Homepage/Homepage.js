import React from "react";
import Context from "../../Context";
import "./Homepage.css";

export default class Homepage extends React.Component {
  static contextType = Context;
  render() {
    return (
      <div>
        <div className="hero-section">
          <div className="hero-wrapper">
            <div className="column-left">
              <h1>Mindfulness</h1>
              <h2>Let's Practice Self-Compassion</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="column-right"></div>
          </div>
        </div>
      </div>
    );
  }
}
