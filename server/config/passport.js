const JWTStrategy = require("passport-jwt").Strategy;
//User Model
const User = require("../models/UserModel");

const cookieExtractor = req => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["access_token"];
  }
  return token;
};

module.exports = passport => {
  //JWT Strategy
  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: cookieExtractor,
        secretOrKey: process.env.JWT_SECRET
      },
      async (payload, done) => {
        try {
          //Find the user specified in token
          const user = await User.findById(payload.id);
          //If the user does not exist
          if (!user) {
            return done(null, false);
          }
          return done(null, user);
        } catch (error) {
          done(error, false);
        }
      }
    )
  );
};
