const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hi, if you see this the port is working fine and further configuration is required.");
});

app.listen(4000, () => {
  console.log("Listening on port 4000...");
});
