const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");

// Middleware
dotenv.config({ path: "./config.env" });
require("./db/conn");
app.use(express.json());
app.use(require("./route/auth"));

const PORT = process.env.PORT;

// Routing

// app.get("/", (req, res) => {
//   res.send("Hello World From Our Home Server");
// });
// app.get("/about", (req, res) => {
//   res.send("Hello World From Our About Server");
// });
app.get("/contact", (req, res) => {
  res.send("Hello World From Our Contact Server");
});
app.get("/service", (req, res) => {
  res.send("Hello World From Our Service Server");
});
app.get("/register", (req, res) => {
  res.send("Hello World From Our register Server");
});
// app.get("/login", (req, res) => {
//   res.send("Hello World From Our register Server");
// });
app.get("*", (req, res) => {
  res.send("404 Page not found");
});

app.listen(PORT, (req, res) => {
  console.log(`Listennig at port no ${PORT}`);
});
