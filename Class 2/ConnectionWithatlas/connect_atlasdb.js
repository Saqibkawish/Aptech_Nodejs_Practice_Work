let mongodb = require('mongoose');
require("dotenv").config()
mongodb.connect("mongodb+srv://saqibkawish:saqib2468@cluster0.erffi.mongodb.net/").
then(()=>{
    console.log("connected to database")
}
).catch((error)=>{
    console.log(error)
})