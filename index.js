const express = require("express");
const app = express();
const { PORT } = require("./config");
var path = require("path");
// const { frontEndDirectoryPath } = require("./charme-web/index.cjs");

// const buildPath = path.join(frontEndDirectoryPath, "dist");

// app.use(express.static(buildPath));

app.get("/ping", (req, res) => {
  res.send("pong");
});

// app.get("/*", (req, res) => {

//  res.sendFile(path.join(buildPath, "index.html"));
// });

app.listen(PORT, () => {
  console.log("listening ----------------", PORT);
});
