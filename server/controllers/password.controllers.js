const User = require("../models/UserModel");

require("dotenv").config();
const Util = require("../utils");

module.exports = {
  recover: async (req, res) => {
    let errors = {};
    try {
      //Find User by Email
      const { email } = req.body;
      const user = await User.findOne({ email });
      //IF no user send an error
      if (!user) {
        errors.message = `The email address  ${req.body.email} is not associated with any account. Double-check your email address and try again.`;
        return res.status(401).json({ message: errors.message });
      }
      //ELSE SEND EMAIL
      Util.sendPasswordReset(user, req, res);
      return res.status(200).json({ message: "Password Reset has been sent" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  // @route GET password/reset
  // @desc  This will receive the user's token from the client once they receive the email
  // @access Public
  reset: async (req, res) => {
    try {
      const errors = {};
      //Check to see if there is a proper token
      const { token } = req.params;
      const user = await User.findOne({
        reset_password_token: token,
        reset_password_expiration: { $gt: Date.now() }
      });
      //If no user send error, Token must be invalid
      if (!user) {
        error.message = "Password reset token is invalid or has expired.";
        return res.status(401).json({ message: errors });
      }
      //Else send user's email and the token to change password
      res.status(200).json({
        message: "Password Link Ok",
        user: user.email,
        token: token
      });
    } catch (error) {
      return res.status(401).json({ message: error });
    }
  },
  // @route GET password/reset
  // @desc  This will receive the user's token from the client once they receive the email
  // @access Public
  updatePasswordViaEmail: async (req, res) => {
    let errors = {};
    const { email, token, password } = req.body;

    try {
      //Check if User Exists
      const user = await User.findOne({
        email: email,
        reset_password_token: token,
        reset_password_expiration: { $gt: Date.now() }
      });

      if (!user) {
        errors.message = "User does not exist, Something went wrong";
        res.status(404).json(errors);
      }

      user
        .update({
          password: password,
          reset_password_token: null,
          reset_password_expiration: null
        })
        .then(() => {
          res.status(200).json({
            success: "Password has successfully updated. Try logging in now."
          });
        });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  }
};
