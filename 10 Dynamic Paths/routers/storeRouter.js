const express= require('express');
const storeController = require('../controller/storeController');
const storeRouter = express.Router();


storeRouter.get("/", storeController.getIndex );
storeRouter.get("/homes", storeController.getHomes );
storeRouter.get("/homes/:homeId", storeController.getHomeDetails );
storeRouter.get("/favourites",storeController.getFavourites);
storeRouter.post("/favourites",storeController.postAddFavourites);

module.exports = storeRouter;