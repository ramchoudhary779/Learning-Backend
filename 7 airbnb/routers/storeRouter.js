const express= require('express');
const path = require('path');

const storeRouter = express.Router();
const rootDir = require('../utils/path-util')

storeRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir,"views","index.html"));
});

module.exports = storeRouter;