import React from "react";
import { useHistory } from "react-router-dom";
import seff from "../images/seff.jpg";
import { useEffect, useState } from "react";

const About = () => {
  return (
    <>
      <div className="container emp-profile">
        <form method="GET">
          <div className="row">
            <div className="col-md-4 ">
              <div className="about-img">
                <img src={seff} alt="seffimg" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>Ajay Rathod</h5>
                <h6>Web Developer</h6>
                <p className="profile-rating mt-3 mb-5">
                  RANKING: <span>1/10</span>
                </p>
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-aria-selected="home-tab"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link "
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-aria-selected="profile-tab"
                    >
                      TimeLine
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-btn "
                name="btnAddMore"
                value="Edit Profile"
              />
            </div>
          </div>

          <div className="row">
            {/* left-side */}
            <div className="col-md-4">
              <div className="profile-work">
                <p>WORK LINKS</p>
                <a href="https://www.instagram.com/" target="_">
                  YouTube
                </a>
                <br />
                <a href="https://www.instagram.com/" target="_">
                  Instragram
                </a>
                <br />
                <a href="https://www.instagram.com/" target="_">
                  Ajay Rathod
                </a>
                <br />
                <a href="https://www.instagram.com/" target="_">
                  GithubMern
                </a>
                <br />
                <a href="https://www.instagram.com/" target="_">
                  Mern Developer
                </a>
                <br />
                <a href="https://www.instagram.com/" target="_">
                  Figma
                </a>
                <br />
                <a href="https://www.instagram.com/" target="_">
                  Civil Engineer
                </a>
                <br />
              </div>
            </div>
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      <label>
                        <p>34963437985</p>
                      </label>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6 ">
                      <label>
                        <p>Ajay Rathod </p>
                      </label>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6 ">
                      <label>
                        <p>Ajay@rathod.com</p>
                      </label>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6 ">
                      <label>
                        <p>9134845453</p>
                      </label>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6 ">
                      <label>
                        <p>Web Development</p>
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade "
                  id="profile"
                  role="tabpanel"
                  aria-aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div className="col-md-6">
                      <label>
                        <p>Expert</p>
                      </label>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Hourly Rate</label>
                    </div>
                    <div className="col-md-6 ">
                      <label>
                        <p>10$/hr</p>
                      </label>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Total Project</label>
                    </div>
                    <div className="col-md-6 ">
                      <label>
                        <p>50</p>
                      </label>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>English Level</label>
                    </div>
                    <div className="col-md-6 ">
                      <label>
                        <p>Expert</p>
                      </label>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Availability</label>
                    </div>
                    <div className="col-md-6 ">
                      <label>
                        <p>6 months</p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
