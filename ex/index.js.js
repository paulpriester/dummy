var express = require("express");
var app = express();

app.get("/hello", function(request, respond) {
	respond.write("Hello Server");
})

app.listen(8080);
console.log("Server is running!");