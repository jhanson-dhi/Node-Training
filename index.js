var express = require('express');
var app = express();
var userdb = require('./users.json');


app.get('/users/', function (req, res) {
   res.type('json').status(200).send (userdb);
});

app.get('/users/:id', function (req, res) {
   var user = userdb.filter(function(obj) {
    return obj.id == req.params.id;
   })[0];
   
   if (user != null) {
    res.type('json').status(200).send(user);
   } else {
    res.status(404).send('404: user not found.');
   }
   
});

app.use('*', function(req,res){
 res.status(404).send('404: Resource not found');
});

app.listen(8081, function() {console.log("we are live.")} );

