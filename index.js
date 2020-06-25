const express = require("express");
const app = express();
const router = express.Router();
const axios = require("axios");

app.use("/", router);
var url = "http://mock-api.com/onwlmeKN.mock/skidtrial";

router.get("/nversion", (req, res) => {
  axios
    .get(url)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(400).send("Error");
    });
});

router.get("/", (req, res) => res.send("Hello!"));

const hostname = "0.0.0.0";
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serving running at http://${hostname}:${port}/`);
});
