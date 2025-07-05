const Favourite = require("../models/Favourite");
const  Home  = require("../models/Home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll(registeredHomes =>{
    res.render('store/index.ejs',{homes: registeredHomes, pageTitle: 'Hamara Airbnb'});
  })
  
}

exports.getHomes = (req, res, next) => {
  Home.fetchAll(registeredHomes =>{
    res.render('store/homes.ejs',{homes: registeredHomes, pageTitle: 'Hamara Airbnb'});
  })
}

exports.getFavourites = (req, res, next) => {
  Favourite.fetchAll(favouriteIds => {
    Home.fetchAll(registeredHomes =>{
      const favouriteHomes = registeredHomes.filter( home => favouriteIds.includes(home.id));
    res.render('store/favourites.ejs',{homes: favouriteHomes, pageTitle: 'Favourites'});
  } )
  })
 
}

exports.postAddFavourites = (req,res,next) => {
  const homeId = req.body.id;
  Favourite.addToFavourites(homeId , error => {
    if(error){
      console.log("Error came during add to favourite",error);
    }
      res.redirect('/favourites');
  })
}

exports.getHomeDetails = (req,res, next) => {
  const HomeId = req.params.homeId;
  
  Home.fetchById( HomeId, home => {
    if(!home){
      console.log("Home not found");
      return res.redirect("/homes"); 
    }
    console.log("Came to detail Page : ",HomeId,home);
    res.render('store/home-details.ejs',{home: home ,pageTitle:'Home Details'});
      })
 
}