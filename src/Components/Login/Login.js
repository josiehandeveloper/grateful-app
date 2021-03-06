import React from "react";
import AuthAPIService from "../../services/auth-api-service";
import TokenService from "../../services/token-service";
import "./Login.css";

// import { API_BASE_URL } from "../../config";

export default class Login extends React.Component {
  state = {
    error: null,
  };
  handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    this.setState({ error: null });
    const user = {
      email: email.value,
      password: password.value,
    };
    AuthAPIService.loginUser(user)
      .then((loginResponse) => {
        TokenService.saveAuthToken(loginResponse.authToken);

        this.props.history.push("/feed");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <div className="login__page">
        <div className="login__container">
          <img className="login__img" alt="" />
          <div className="loginform__container">
            <div className="login__wrapper">
              <h1>Login</h1>
              <p>Demo Email: testuser@testuser.com</p>
              <p>Demo Password: Testuser1!</p>
              <form onSubmit={this.handleLogin}>
                {this.state.error && (
                  <p className="error">{this.state.error}</p>
                )}

                <label htmlFor="login_email">EMAIL</label>
                <input
                  type="email"
                  className="email"
                  id="user_email"
                  name="email"
                  required=""
                />

                <label htmlFor="login_password">PASSWORD</label>
                <input
                  type="password"
                  className="password"
                  id="user_password"
                  name="password"
                  required=""
                />

                <button className="submit" type="submit" id="login_button">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
