const express = require("express");
const bodyParser = require("body-parser");

const Project = require("./app/models/project");
const Task = require("./app/models/task");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  res.send({ user: req.userId });
});

app.get("/:projectId", async (req, res) => {
  res.send({ user: req.userId });
});

app.post("/", async (req, res) => {
  res.send({ user: req.userId });
});

app.put("/:projectId", async (req, res) => {
  res.send({ user: req.userId });
});

app.delete("/:projectId", async (req, res) => {
  res.send({ user: req.userId });
});

require("./app/controllers/index")(app);

app.listen(3000);
