const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const server = express();
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`server is listening at ${port}`);
});

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.get("/", (req, res) => {
  console.log(req);
  console.log(req.url);
  res.end(fs.readFileSync(path.resolve("./index.html"), { encoding: "utf-8" }));
});

server.post("/", (req, res) => {
  console.log(req.method);
  console.log(req.body);
  console.log(req.url);
  res.end(fs.readFileSync(path.resolve("./index.html"), { encoding: "utf-8" }));
});
