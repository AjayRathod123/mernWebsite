import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Registration = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const eventInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");
      history.push("/login");
    }
  };

  return (
    <>
      <div className="reg">
        <div className="main-reg">
          <h1>
            <span className="h1-span">Sign up</span>
          </h1>
          <form method="POST">
            <div className="inp-field">
              <div className="inp-name">
                <input
                  className="i-name"
                  type="name"
                  name="name"
                  id="name"
                  autoComplete="off"
                  value={user.name}
                  onChange={eventInput}
                  placeholder="Enter Your Name"
                />
                <hr className="inp-hr" />
              </div>
              <div className="inp-email">
                <input
                  className="i-email"
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={user.email}
                  onChange={eventInput}
                  placeholder="Enter Your Email"
                />
                <hr className="inp-hr" />
              </div>
              <div className="inp-phone">
                <input
                  className="i-phone"
                  type="phone"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  value={user.phone}
                  onChange={eventInput}
                  placeholder="Your Phone Number"
                />
                <hr className="inp-hr" />
              </div>
              <div className="inp-profession">
                <input
                  className="i-profession"
                  type="work"
                  name="work"
                  id="work "
                  autoComplete="off"
                  value={user.work}
                  onChange={eventInput}
                  placeholder="Enter Your Profession"
                />
                <hr className="inp-hr" />
              </div>
              <div className="inp-password">
                <input
                  className="i-password"
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  value={user.password}
                  onChange={eventInput}
                  placeholder="Your Password"
                />
                <hr className="inp-hr" />
              </div>
              <div className="inp-cpassword">
                <input
                  className="i-cpassword"
                  type="cpassword"
                  name="cpassword"
                  id="cpassword"
                  autoComplete="off"
                  value={user.cpassword}
                  onChange={eventInput}
                  placeholder="Cofirmed Password"
                />
                <hr className="inp-hr" />
              </div>
            </div>
            <div className="reg-btn">
              <button onClick={PostData} className="regi-btn">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
