import React, { Component } from "react";
import "./Hero.css";

class Hero extends Component {
  render() {
    return (
      <div className="hero__container">
        <div className="hero__info">
          <button className="gratitude__Btn">
            Let's Practice Some Gratitude!
          </button>
        </div>
      </div>
    );
  }
}

export default Hero;
