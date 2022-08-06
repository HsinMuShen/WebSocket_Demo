const express = require("express");
const app = express();

app.use(express.json());

app.get("/getNumber", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(getRandomInt());
});

app.listen(3000, () => {
  console.log("port is running on port 3000.");
});

function getRandomInt() {
  return Math.floor(100 + Math.random() * 900).toString();
}
