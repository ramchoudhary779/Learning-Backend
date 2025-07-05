const  Home  = require("../models/Home");


exports.getAddHome = (req, res, method) => {
  res.render('host/Add-Home.ejs',{pageTitle:'Add Home'});
}


exports.postAddHome = (req,res,next) => {
 
  const { houseName , price ,location , rating, photoUrl} = req.body;
  const newHome = new Home(houseName , price ,location , rating , photoUrl);
  newHome.save(error => {
    if (error) {
      res.redirect('/');
    } else{
        res.render('host/Home-Added.ejs',{pageTitle:'Home Added'});
    }
  });
  
};

