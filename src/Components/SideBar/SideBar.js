import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import "./SideBar.css";

export default class SideBar extends Component {
  logout = (e) => {
    e.preventDefault();
    TokenService.clearAuthToken();
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/" className="sidebar-logo">
              <i className="fas fa-hands" />
            </Link>
          </li>
          {TokenService.hasAuthToken() ? (
            <li>
              <Link to="/feed" className="feed">
                <i className="fas fa-home"></i> Feed
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/" className="home">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
          )}
          {TokenService.hasAuthToken() ? (
            <div className="authLinks">
              <li>
                <a
                  className="logout"
                  type="submit"
                  href="/logout"
                  onClick={(e) => this.logout(e)}
                >
                  <i className="fas fa-sign-out-alt"></i> Logout
                </a>
              </li>
              <li>
                <Link to="/" className="notifications">
                  <i className="far fa-bell"></i> Notifications
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="profile">
                  <i className="fas fa-user-alt"></i>Profile
                </Link>
              </li>
            </div>
          ) : (
            <div className="sidebarlinks">
              <li>
                <Link to="/login" className="login">
                  <i className="fas fa-sign-in-alt"></i> Login
                </Link>
              </li>

              <li>
                <Link to="/register" className="register">
                  <i className="fas fa-user-plus"></i> Register
                </Link>
              </li>
            </div>
          )}
        </ul>
      </div>
    );
  }
}
