import React, { Component } from "react";
import homepage from "../../images/homepage.png";
import "./Homepage.css";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="container">
          <img src={homepage} alt="homepage" width={1500} />
          <h1>Welcome to Grateful</h1>

          <h2>About</h2>

          <ul>
            <li>
              grat·i·tude /ˈɡradəˌt(y)o͞od/ the quality of being thankful;
              readiness to show appreciation for and to return kindness.{" "}
            </li>
            <li>
              Grateful is an application that allows users to practice
              gratitude.
            </li>
            <li>
              Studies have shown that practicing gratitude has incredible
              positive benefits in our lives when done on a routinely basis.
              Research shows that gratitude has a wide range of benefits from
              physical to psychological. Practicing gratitude improves your
              sleep and your immune system. While psychologically it allows us
              to be more positive and experience more joy in our lives.
            </li>
            <li>
              Robert Emmons, psychology professor and gratitude researcher at
              the University of California, Davis says that there are two key
              parts to practicing gratitude:
            </li>
            <li>1. We affirm the good things we've received</li>
            <li>
              2. We acknowledge the role other people play in providing our
              lives with goodness
            </li>
            <li>So Let's Get Started!</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Homepage;
