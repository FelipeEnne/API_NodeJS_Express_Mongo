const express = require("express");
const bodyParser = require("body-parser");

const Project = require("./models/project");
const Task = require("./models/task");

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

require("./controllers/authControler")(app);
require("./controllers/projectControler")(app);

app.listen(3000);
