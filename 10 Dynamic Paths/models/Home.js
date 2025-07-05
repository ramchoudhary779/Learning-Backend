const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path-util');


const homeFilePath = path.join(rootDir,'data','homes.json');

module.exports =  class Home {
    constructor (houseName,price,location, rating, photoUrl){
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photoUrl = photoUrl;
    }

    save(callback){
        this.id = Math.random().toString();
        Home.fetchAll( registeredHomes => {

        registeredHomes.push(this);
        
        fs.writeFile(homeFilePath,JSON.stringify(registeredHomes),callback
        ); 
        });  
    }

    static fetchAll(callback) {
        fs.readFile(homeFilePath, (err , data) => {
            if (err) {
                callback([]);
            } else {
                callback(JSON.parse(data));
            }
        })
        
    }

    static fetchById(homeId, callback) {
        Home.fetchAll( homes => {
            const home = homes.find(home => home.id === homeId);
            callback(home);
        });
    }
}
