import React, { Component } from "react";
import Hero from "../../Components/Hero/Hero";
import "./Homepage.css";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <Hero />
        <div className="about">
          <div className="about__container">
            <div className="about__img"></div>
            <div className="about__info">
              <ul className="about__list">
                <h2>ABOUT</h2>
                <li>
                  grat·i·tude /ˈɡradəˌt(y)o͞od/ the quality of being thankful;
                  readiness to show appreciation for and to return kindness.{" "}
                </li>
                <li>
                  Grateful is an application that allows users to practice
                  gratitude.
                </li>
                <li>
                  Practicing gratitude improves your sleep and your immune
                  system. While psychologically it allows us to be more positive
                  and experience more joy in our lives.
                </li>
                <li>There are two key parts to practicing gratitude:</li>
                <li>1. We affirm the good things we've received</li>
                <li>
                  2. We acknowledge the role other people play in providing our
                  lives with goodness
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
