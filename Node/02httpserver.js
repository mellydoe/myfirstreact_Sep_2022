
//import http package 
let http = require("http")

function iAMCallBackFunction(request, response){
    console.log(request)
    response.writeHead(200, {"Content-Type":"text/html"})
    response.write("<h1>Hello from node server</h1>")
    response.write("<o1>")
    response.write("<li>HTML</li>")
    response.write("<li>CSS</li>")
    response.write("<li>JS</li>")
    response.write("<li>React</li>")
    response.end()
}

//use http to create server 
//createServer will create the server using call back function
//callback function does the actual job
var firstServer = http.createServer(iAMCallBackFunction)

firstServer.listen(8181)
