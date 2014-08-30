// set up ========================
var express = require('express');
var app = express(); // create our app w/ express

// configuration =================

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/app'));

// listen (start app with node server.js) ======================================
app.listen(5000);
console.log("App listening on port 5000");