// npm i mongoose 
let mongodb = require('mongoose');
require("dotenv").config()
mongodb.connect(process.env.URL).
then(()=>{
    console.log("connected to database")
}
).catch((error)=>{
    console.log(error)
})