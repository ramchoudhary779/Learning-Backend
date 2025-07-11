const Home = require("../models/Home");

exports.getAddHome = (req, res, method) => {
  res.render("host/edit-home.ejs", { editing : false , pageTitle: "Add Home" });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  if (!editing) {
    console.log("Editing flag not set properly");
    return res.redirect("/host/host-homes");
  }

  Home.fetchById(homeId, (home) => {
    if (!home) {
      console.log("Home not found for editing");
      return res.redirect("/host/host-homes");
    }
    console.log(homeId, editing, home);
    res.render("host/edit-home.ejs", {
      home: home,
      editing: editing,
      pageTitle: "Edit your page",
    });
  });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body;
  const newHome = new Home(houseName, price, location, rating, photoUrl);
  newHome.save((error) => {
    if (error) {
      res.redirect("/");
    } else {
      res.render("host/Home-Added.ejs", { pageTitle: "Home Added" });
    }
  });
};

exports.postEditHome = (req,res,next) => {
  const {id,houseName, price, location, rating, photoUrl } = req.body;
  const newHome = new Home(houseName, price, location, rating, photoUrl);
  newHome.id = id;
  newHome.save((error) => {
    if (error) {
      console.log("Error Came while Updating Home",error);
    } 
      res.redirect("/host/host-homes");
  });
}

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("host/host-homes.ejs", {
      homes: registeredHomes,
      pageTitle: "Host Homes",
    });
  });
};

exports.postDeleteHome = (req,res,next) => {
  const homeId = req.params.homeId;
  console.log("Came to delete",homeId);
  Home.deleteById(homeId, error =>{
    if(error){
      console.log("Error occurred while deleting home : ",error)
    }
     res.redirect("/host/host-homes");
  })
 
}
