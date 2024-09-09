const http = require ("http");

const server = http.createServer(function (req, res){
    //console.log(req.url);
    if(req.url = "/"){
        res.end("hello from the server");
    }else if (req.url =  "/about"){
        res.end("hello from the about us side server");
    }else if (req.url = "/contact"){
        res.write("Heloo from the contact us page");
        res.end();
    }else {
        res.writeHead(200 , {"Content-type" : "text/html"});
        res.end("<h1> 404 error pages . Page not found </h1>")
    }
});
server.listen( 8000, "127.0.0.1" , () => {
    console.log("listening to the port no 8000");
});