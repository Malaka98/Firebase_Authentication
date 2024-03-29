const jwt = require("jsonwebtoken");

exports.authToken = (req, res, next) => {

  const token = req.cookies.accessToken;

  if (typeof token != "undefined") {
    jwt.verify(token, "privateKey.key", (err, details) => {
      if (err) {
        res.json({
          authorized_user: true
        })
      } else {
        // req.user = details.user;
        next();
      }
    });
  } else {
    res.json({
      loading: false,
      auth: false,
    });
  }
};
