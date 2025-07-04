const  Home  = require("../models/Home");

exports.getHome = (req, res, next) => {
  Home.fetchAll(registeredHomes =>{
    res.render('index.ejs',{homes: registeredHomes, pageTitle: 'Hamara Airbnb'});
  })
  
}