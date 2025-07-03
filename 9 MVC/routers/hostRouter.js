
const express = require('express');

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, method) => {
  res.render('Add-Home.ejs',{pageTitle:'Add Home'});
});

const registeredHomes = [];

hostRouter.post("/add-home", (req,res,next) => {
  registeredHomes.push(req.body);
  res.render('Home-Added.ejs',{pageTitle:'Home Added'});
});

exports.hostRouter =hostRouter;
exports.registeredHomes = registeredHomes;
