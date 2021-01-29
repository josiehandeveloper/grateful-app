import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/" className="navbar-logo">
          GRATEFUL <i class="fas fa-hands" />
        </Link>
        <div className="authLinks">
          <Link to="/login" className="login">
            Login
          </Link>
          <Link className="nav_register" to="/register">
            Register
          </Link>
          <Link to="/dashboard" className="gratitude">
            Gratitude
          </Link>
          <Link to="/list" className="list">
            List
          </Link>
        </div>
      </div>
    );
  }
}
