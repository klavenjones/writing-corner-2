const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookierParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();

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

app.use(morgan("dev"));

//Routes
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/password", require("./routes/password.routes"));
app.use("/api/auth", require("./routes/auth.routes"));

//Starting Server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App listening on Port: ${port}`));
