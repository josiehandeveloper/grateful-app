import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./Nav";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <SideBar />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
