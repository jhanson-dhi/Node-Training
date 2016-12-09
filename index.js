var express = require('express');
var app = express();

app.get('/', function(req,res) {
 res.send('hello world');
});

app.get('/users/', function (req, res) {
   res.send ('hello users');
});

app.get('/users/:id', function (req, res) {
   res.send ('hello user id: ' + req.params.id);
});

app.listen(8081, function() {console.log("we are live.")} );





/****
var http = require("http");
var url = require("url");

http.createServer(function (req, res) {
    
    var queryData = url.parse(req.url);
    var pth = queryData.pathname.split("/");
    console.log(pth);
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    res.end("hit the end");

}
).listen(8081);
console.log("Server Running....");
****/