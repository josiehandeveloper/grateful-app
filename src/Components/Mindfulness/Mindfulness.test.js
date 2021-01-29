import React from "react";
import ReactDOM from "react-dom";
import Mindfulness from "./Mindfulness";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Mindfulness />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
