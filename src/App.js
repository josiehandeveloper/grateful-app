import React, { Component } from "react";
import { Route } from "react-router-dom";
import Context from "./Context";
import NavBar from "./Components/NavBar/NavBar";
import Homepage from "./Components/Homepage/Homepage";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Gratitude from "./Components/Mindfulness/Mindfulness";
import List from "./Components/List/List";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  state = {
    list: [
      {
        title: "Lorem ipsum",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        title: "Lorem ipsum 2",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur 2.",
      },
    ],
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="App">
          <div className="header">
            <Route path="/" component={NavBar} />
          </div>
          <main>
            <Route exact path="/" component={Homepage} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Gratitude} />
            <Route path="/list" component={List} />
          </main>
          <div className="footer">
            <Route path="/" component={Footer} />
          </div>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
