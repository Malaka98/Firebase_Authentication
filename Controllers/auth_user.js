const jwt = require("jsonwebtoken");

const firebase = require("../Firebase/firebase_connect");

exports.singUp = async (req, res) => {
  const email = req.body["email"];
  const password = req.body["password"];
  console.log(email);
  await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      //   var user = userCredential.user;
      // console.log(userCredential);
      res.json("Sing In Successfully");
      // ...
    })
    .catch((error) => {
      // let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorMessage);
    });
};

/*----------------------------//Login user//-------------------------------*/

exports.singIn = async (req, res) => {
  // console.log("----------------------------------------");
  const email = req.body["email"];
  const pass = req.body["pass"];

  await firebase
    .auth()
    .signInWithEmailAndPassword(email, pass)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;

      jwt.sign({ user: user.email }, "privateKey.key", (err, token) => {
        if (err) throw err;

        res
          .cookie("accessToken", token, { httpOnly: true })
          .json({
            authorized_user: true
          });
      });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      res.json({
        authorized_user: false,
        error: errorMessage
      });
    });
};

/*-----------------------------------------------------------------------*/

/*----------------------------//Authenticate checker//-------------------------------*/

exports.check = async (req, res) => {
  await firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      res.json({
        loading: false,
        auth: true,
      });
      // ...
    } else {
      // User is signed out
      // ...
      res.json({
        loading: false,
        auth: false,
      });
    }
  });
};

/*----------------------------------------------------------------------------------*/

exports.logOut = async (req, res) => {
  await firebase.auth().signOut();

  res.clearCookie("accessToken", { sameSite: true }).json({
    logout: "Successfully logged out",
  });
};
