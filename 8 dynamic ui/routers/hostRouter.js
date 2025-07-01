const path = require('path');
const express = require('express');


const rootDir = require('../utils/path-util');
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, method) => {
  res.sendFile(path.join(rootDir,"views","Add-Home.html"));
});

const registeredHomes = [];

hostRouter.post("/add-home", (req,res,next) => {
  registeredHomes.push(req.body);
  res.sendFile(path.join(rootDir,"views","Home-Added.html"));
});

exports.hostRouter =hostRouter;
exports.registeredHomes = registeredHomes;
