const User = require("../models/UserModel");
const Posts = require("../models/PostModel");
module.exports = {
  signIn: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      console.log(password);
      const user = await User.findOne({ email });
      //Check if Admin exists
      if (!user) return res.status(401).json("Current Admin does not exist");
      // //Validate Password
      const isValid = await user.isValidPassword(password);
      if (!isValid)
        return res
          .status(401)
          .json({ message: "Invalid Email and Password Combination" });
      // Generate Token
      const token = await user.generateJWT();
      res.cookie("access_token", token, {
        maxAge: 900000,
        httpOnly: true
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  signUp: async (req, res, next) => {
    const { email, password, firstName, lastName } = req.body;
    //Let's see if Admin exists
    let user = await User.findOne({ email });
    //If the user exists then send an errors
    if (user) {
      console.log(user);
      return res.status(409).json({ error: "User Already exists" });
    }
    //If not lets save this user to the database
    //IF NOT REGISTER NEW USER
    const newUser = new User({
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password
    });

    await newUser.save();
    return res.status(200).json({ success: "User Created", user: newUser });
  },
  signOut: async (req, res, next) => {
    res.clearCookie("access_token");
    // console.log('I managed to get here!');
    res.json({ success: true });
  },
  checkAuth: async (req, res, next) => {
    let user = req.user;
    let posts = await Posts.find({ "author.id": req.user.id });
    user.password = null;
    res.status(200).json({ success: true, user: user });
  }
};
