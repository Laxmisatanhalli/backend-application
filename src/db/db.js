const mongoose = require("mongoose");

async function connectDB() {
   await mongoose.connect("mongodb://yt:Lucky1234@ac-1pwcfhc-shard-00-00.ps50ikk.mongodb.net:27017,ac-1pwcfhc-shard-00-01.ps50ikk.mongodb.net:27017,ac-1pwcfhc-shard-00-02.ps50ikk.mongodb.net:27017/?ssl=true&replicaSet=atlas-cfg1gv-shard-0&authSource=admin&appName=backend")
    
   console.log("Connected to MongoDB");
}

module.exports = connectDB;