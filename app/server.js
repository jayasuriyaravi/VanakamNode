// this is how server is  created using the node.js HTTP
const http = require("http");

// create the server
const server = http.createServer((req,res)=>{
    res.end("server is created")
});

// listen to a port
server.listen(777,()=>{
    console.log("Server is running inthe port 777")
})

