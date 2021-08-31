import React, { useState, useEffect } from "react";

const Home = () => {
  const [homeData, setHomeData] = useState("");
  const userHome = async () => {
    try {
      const res = await fetch("/login", {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setHomeData(data.name);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userHome();
  }, []);

  return (
    <>
      <div className="home">
        <div className="home-div">
          <p>Welcome</p>
          <h1>{homeData}</h1>
          <h1>We are the Mern Developers</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
