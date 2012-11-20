var express = require('express');
var Q = require('q');

var log = function()
{
	var args = [].slice.apply(arguments);
	args.unshift(new Date().getTime()/1000);
	console.log(args.join(" "));
};

var app = express();
app.set("strict routing", true);
app.use(express.logger());

var makeMiddleware = function (msg) {
	return function (req, res, next) {

		var timeout = Math.round(Math.random() * 200);

		log("Waiting for", msg, "Resolves in:", timeout);

		res.tasks[msg]=function(callback) {
			setTimeout(function(){
				var val="Resolving "+msg;
				log(val);
				callback(null, val);
			}, timeout)
		};

		next();

	}
};

app.use(function (req, res, next) {
	log("Incoming");
	res.tasks={};
	next();
});
app.use("/", makeMiddleware("USERS"));
app.use("/", makeMiddleware("PRODUCTS"));

app.get("/", function (req, res) {

	log("Waiting for", Object.keys(res.tasks).length, "promises to resolve");
	require('async').auto(res.tasks, function(){
		log("Done!");
		res.send("OK");
	});

});

app.listen(1337);
