import React from "react";
import ReactDOM from "react-dom";
import Feed from "./Feed";
import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Feed />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
