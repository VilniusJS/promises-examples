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

		res.promises.push(
			Q.resolve("Resolving " + msg)
				.delay(timeout)
				.then(log));

		next();

	}
};

app.use(function (req, res, next) {
	log("Incoming");
	res.promises = [];
	next();
});
app.use("/", makeMiddleware("USERS"));
app.use("/", makeMiddleware("PRODUCTS"));

app.get("/", function (req, res) {

	log("Waiting for", res.promises.length,"promises to resolve");
	Q.all(res.promises).then(function () {
		log("Done!");
		res.send("OK");
	}).done();

});

app.listen(1337);
