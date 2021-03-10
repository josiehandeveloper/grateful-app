import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import "./Nav.css";

export default class Nav extends Component {
  logout = (e) => {
    e.preventDefault();
    TokenService.clearAuthToken();
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="nav">
        <div className="nav-logo">
          {TokenService.hasAuthToken() ? (
            <Link to="/feed" className="feed">
              <i className="fas fa-hands" />
            </Link>
          ) : (
            <Link to="/" className="home">
              <i className="fas fa-hands"></i>
            </Link>
          )}
        </div>
        <div className="nav-links">
          {TokenService.hasAuthToken() ? (
            <div className="logout">
              <a
                className="logout"
                type="submit"
                href="/logout"
                onClick={(e) => this.logout(e)}
              >
                <i className="fas fa-sign-out-alt"></i> Logout
              </a>

              <Link to="/notification" className="notifications">
                <i className="far fa-bell"></i> Notifications
              </Link>

              <Link to="/dashboard" className="profile">
                <i className="fas fa-user-alt"></i>Profile
              </Link>
            </div>
          ) : (
            <div className="nav-authlinks">
              <Link to="/login" className="login">
                <i className="fas fa-sign-in-alt"></i> Login
              </Link>

              <Link to="/register" className="register">
                <i className="fas fa-user-plus"></i> Register
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}
