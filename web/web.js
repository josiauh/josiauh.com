var express = require('express');
var app = express();
var url = require('url');
var fs = require('fs');
// app.use('/', express.static(__dirname + '/')); // ← adjust
app.use(function(req, res, next) {
    var requestUrl = url.parse(req.url) 
    var bfdi = requestUrl.pathname
    console.log(requestUrl)
    console.log("getting " + bfdi)
    if (bfdi == "/") {
      bfdi = "index.html" // index functionality
      console.log("index time, it’s " + __dirname + "/" + bfdi)
    }
    if (!bfdi.includes(".")) {
      bfdi = bfdi + ".html" // assuming this is a page
    }
    if (fs.existsSync(__dirname + bfdi)) {
      // oooooooooh AH BA THA HA HA BAH
      res.status(200); // send the OK response!!!
      res.sendFile(__dirname + "/" + bfdi) // file
    } else {
    res.status(404);
    res.sendFile(__dirname + '/404.html');
    }
});
app.listen(3000, function() { console.log('listening'); });