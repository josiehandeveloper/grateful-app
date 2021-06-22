import React from "react";
import AuthApiService from "../../services/auth-api-service";
import "./Register.css";

export default class Register extends React.Component {
  state = {
    error: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = e.target;
    this.setState({ error: null });

    if (password.value !== confirmPassword.value) {
      return this.setState({
        error: "Please enter matching passwords",
      });
    }
    AuthApiService.postUser({
      username: username.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    })
      .then((user) => {
        this.props.history.push("/login");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <div className="register__page">
        <div className="register__container">
          <img className="register__img" alt="" />
          <div className="registerform__container">
            <div className="register__wrapper">
              <form onSubmit={this.handleSubmit}>
                {this.state.error && (
                  <p className="error">{this.state.error}</p>
                )}
                <h1>Register</h1>

                <label htmlFor="register_username">USERNAME</label>
                <input
                  className="register__username"
                  type="username"
                  id="register_username"
                  name="username"
                  required=""
                />

                <label htmlFor="register_email">EMAIL</label>
                <input
                  className="email"
                  type="email"
                  id="register__email"
                  name="email"
                  required=""
                />

                <label htmlFor="register_password">PASSWORD</label>
                <input
                  type="password"
                  className="register__password"
                  id="register_password"
                  name="password"
                  required=""
                />

                <label htmlFor="confirm"> CONFIRM PASSWORD</label>
                <input
                  type="password"
                  className="confirm__password"
                  id="confirm__password"
                  name="confirmPassword"
                  required=""
                />

                <button className="submit" type="submit" id="register_button">
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
