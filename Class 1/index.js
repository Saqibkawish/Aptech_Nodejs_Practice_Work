require("dotenv").config()
let http_module = require("http");
let port_No = process.env.PORT

http_module.createServer(function(re, res){
    res.writeHead(200, {"Content-Type": "text/html"})
    res.write("<h1> SERVER IS RUNNING </h1>")
    res.write("<h1> AGAIN SERVER CHECK</h1>")
    res.end()
}).listen(port_No,()=>{
    console.log(`Server is running on port + http://localhost:${port_No}`)
})