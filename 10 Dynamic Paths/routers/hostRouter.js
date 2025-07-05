
const express = require('express');

const hostRouter = express.Router();
const hostController = require('../controller/hostController');

hostRouter.get("/add-home", hostController.getAddHome );



hostRouter.post("/add-home",hostController.postAddHome );

exports.hostRouter =hostRouter;

