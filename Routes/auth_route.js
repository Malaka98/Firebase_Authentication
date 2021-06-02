const express = require("express");

router = express.Router();

const user = require("../Controllers/auth_user");
const authVerify = require("../Middleware/verifyToken");

router.post("/singup", user.singUp);
router.post("/singin", user.singIn);
router.get("/check", authVerify.authToken, user.check);
router.get("/logout", user.logOut);

module.exports = router;
