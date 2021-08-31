import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="main-err">
        <div className="err-header">
          <h1>404</h1>
        </div>
        <div className="err-body">
          <h2>Page Not Found</h2>
        </div>
        <div className="err-home">
          <NavLink className="err-navlink" to="/">
            Back To Home
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Error;
