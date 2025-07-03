const express= require('express');


const storeRouter = express.Router();

const { registeredHomes } = require('./hostRouter');

storeRouter.get("/", (req, res, next) => {
  console.log(registeredHomes);
  res.render('index.ejs',{homes: registeredHomes, pageTitle: 'Hamara Airbnb'});
});

module.exports = storeRouter;