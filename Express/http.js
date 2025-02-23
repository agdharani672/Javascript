const http=require("http");
const today = require('./date.js');

const requestListener=function(req,res){
    res.writeHead(200);
    res.end("Hello WOrld! Today date is:"+today.getDate());
}

const port=8080;
const server=http.createServer(requestListener);
server.listen(port,()=>{
    console.log("Server is running on port 8080");
});
