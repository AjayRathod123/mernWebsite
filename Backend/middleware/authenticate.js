const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const Authentication = async (req, res, next) => {
  try {
    // const jwtoken = "";
    const token = "req.cookies.jwtoken";
    const verifyToken = jwt.verify(token, process.env.SECRETE_KEY);

    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("User Not Found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (error) {
    res.send("Unauthorised");
    console.log(error);
  }
};

module.exports = Authentication;
