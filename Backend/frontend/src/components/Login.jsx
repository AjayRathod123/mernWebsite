import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();
    if (data.status === 402 || !data) {
      window.alert("Invalid Login Details");
    } else {
      window.alert("Login Succefully");
      history.push("/");
    }
  };

  return (
    <>
      <div className="login">
        <div className="main-login">
          <h1>
            <span className="h1-span">AJAYWEB</span>
          </h1>
          <p> Login To Explore Our Website </p>
          <form method="POST">
            <div className="inp-field">
              <div className="inp-email">
                <input
                  className="i-email"
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <hr className="inp-hr" />
              </div>

              <div className="inp-password">
                <input
                  className="i-password"
                  type="text"
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <hr className="inp-hr" />
              </div>
            </div>
            <div className="login-btn">
              <button onClick={loginUser} className="login-btn1">
                Login
              </button>
            </div>
            <div className="login-opt">
              <p>Don't have an account?</p>
            </div>
            <div className="login-link">
              <NavLink to="/registration">Create Account</NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
