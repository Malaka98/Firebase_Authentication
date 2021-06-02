const firebase = require("../Firebase/firebase_connect");

exports.authUser = async (req, res) => {
  const data = [];

  await firebase
    .firestore()
    .collection("user")
    .where("key", "==", "54321")
    .get()
    .then((result) => {
      console.log(result);
      result.forEach((doc) => {
        data.push(doc.data());
        // console.log(doc.data());
      });
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
};
