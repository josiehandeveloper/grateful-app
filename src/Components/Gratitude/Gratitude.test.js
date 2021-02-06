import React from "react";
import ReactDOM from "react-dom";
import Gratitude from "./Gratitude";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Gratitude />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
