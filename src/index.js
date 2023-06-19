const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const db = require("./db.js");
const testapis = require("./module.js");

db.connect();

app.get("/province", (req, res) => {
  testapis
    .find({})
    .then(function (item) {
      res.header("Content-Security-Policy", "default-src 'self' data");
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.send(item);
    })
    .catch(function (err) {
      console.log(err);
    });
});
app.get("/", function (req, res) {
  res.send({ author: "Hao" });
});
app.get("/home", function (req, res) {
  res.send(`<h1>Hello</h1>`);
});
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
