const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookierParser = require("cookie-parser");
const cors = require("cors");
const passport = require("passport");
const path = require("path");

// require("dotenv").config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

// Middlewares
app.use(cookierParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

// Passport Config
app.use(passport.initialize());
require("./config/passport")(passport);

//Routes
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/password", require("./routes/password.routes"));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/post", require("./routes/post.routes"));

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//Starting Server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App listening on Port: ${port}`));
