const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");


const authUser = asyncHandler(async (req, res) => {
  console.log("Hello")
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  console.log(user)
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});



module.exports = { authUser };
