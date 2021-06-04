const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require('cors')

const app = express();

const corsOptions = {
  origin: "https://react-route-guard-with-redux-hwq75kxda.vercel.app/",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cookieParser());
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", require("./Routes/auth_route"));

app.listen(process.env.PORT || 4000, () => {
  console.log("Server start");
});
