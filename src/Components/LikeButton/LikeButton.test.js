import React from "react";
import ReactDOM from "react-dom";
import LikeButton from "./LikeButton";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <LikeButton />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
