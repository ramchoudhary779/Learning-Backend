const path = require('path');
const express = require('express');


const rootDir = require('../utils/path-util');
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, method) => {
  res.sendFile(path.join(rootDir,"views","Add-Home.html"));
});

hostRouter.post("/add-home", (req,res,next) => {
  res.sendFile(path.join(rootDir,"views","Home-Added.html"));
});

module.exports =hostRouter;
