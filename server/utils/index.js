const sgMail = require("@sendgrid/mail");
const crypto = require("crypto");

require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_KEY);

module.exports = {
  sendPasswordReset: async (user, req, res) => {
    try {
      user.generatePasswordReset();
      //Save Token
      await user
        .save()
        .then(user => {
          console.log("LINE 48", user);
          let link = `http://${req.headers.host}/auth/password/reset/${user.reset_password_token}`;
          const mailOptions = {
            to: user.email,
            from: process.env.EMAIL,
            subject: "Password Change Reques",
            text: `Hi ${user.firstname} \n
                  Please click on the following link ${link} to reset your password. \n\n
                  If you did not request this, please ignore this email\n
                  and your password wiill remain the sane\n`
          };
          sgMail.send(mailOptions, (err, result) => {
            console.log("LINE 26", err);
            if (err)
              return res.status(500).json({ message: "Something went wrong" });
            res.status(200).json({
              message: `A Password Reset Email has been sent to ${user.email}`
            });
          });
        })
        .catch(err => res.status(500).json({ message: error.message }));
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
