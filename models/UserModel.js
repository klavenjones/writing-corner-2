var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

require("dotenv").config();

var UserSchema = new Schema(
  {
    email: {
      type: String,
      required: "Email is required"
    },
    password: {
      type: String,
      required: "Password is required"
    },
    firstname: {
      type: String
    },
    lastname: {
      type: String
    },
    reset_password_token: {
      type: String,
      required: false
    },
    reset_password_expiration: {
      type: Date,
      required: false
    },
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }]
  },
  { timestamps: true }
);

//Hash the password before saving it to the database
UserSchema.pre("save", async function(next) {
  try {
    //Generate Salt
    const salt = await bcrypt.genSalt(8);
    //Hash Password
    const hashPassword = await bcrypt.hashSync(this.password, salt, null);
    // Reassign hashed version over the original
    this.password = hashPassword;
    next();
  } catch (error) {
    next(error);
  }
});

//Hash the password before saving it to the database
// UserSchema.pre("update", async function(next) {
//   try {
//     let updatedUser = this._update;
//     //Generate Salt
//     const salt = await bcrypt.genSalt(10);
//     //Hash Password
//     const hashPassword = await bcrypt.hashSync(
//       updatedUser.password,
//       salt,
//       null
//     );
//     // Reassign hashed version over the original
//     updatedUser.password = hashPassword;
//     next();
//   } catch (error) {

//     next(error);
//   }
// });

//Create a method to validate password before signing in
UserSchema.methods.isValidPassword = async function(newPassword) {
  try {
    return bcrypt.compareSync(newPassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

// UserSchema.statics.generateHash = function generateHash(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// UserSchema.methods.isValidPassword = function validatePassword(pass) {
//   return bcrypt.compareSync(pass, this.password);
// };

UserSchema.methods.generateJWT = async function() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  let payload = {
    id: this._id,
    email: this.email
  };

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: parseInt(expirationDate.getTime() / 1000, 10)
  });
};

UserSchema.methods.generatePasswordReset = function() {
  this.reset_password_token = crypto.randomBytes(20).toString("hex");
  this.reset_password_expiration = Date.now() + 3600000; //expires in an hour
};

module.exports = mongoose.model("User", UserSchema);
