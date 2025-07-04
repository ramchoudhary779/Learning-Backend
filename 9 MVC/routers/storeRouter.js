const express= require('express');
const storeController = require('../controller/storeController');
const storeRouter = express.Router();


storeRouter.get("/", storeController.getHome );

module.exports = storeRouter;