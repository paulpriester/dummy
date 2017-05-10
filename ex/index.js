var express = require("express");
var bodyParser = require("body-parser")
var app = express();

app.use(bodyParser.json());

app.get("/hello", function(request, respond) {
	respond.json({"hello": "Hello Adam", 
				  "Syntax": "No",
				   });
	
});

app.post("/hello", function (request, respond) {
	console.log(request.body);
	
})

app.listen(8080);
console.log("Server is running!");